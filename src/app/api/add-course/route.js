import clientPromise from "../../../lib/mongodb";

export const POST = async (req) => {
  try {
    const formData = await req.formData();

    // Extract fields from FormData
    const title = formData.get("title");
    const price = formData.get("price");
    const description = formData.get("description");
    const image = formData.get("image");
    const courseId = formData.get("id"); // Optional: For editing

    // Validate required fields
    if (!title) {
      return Response.json(
        {
          message: "Name, price, and description are required",
        },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Check if course exists
    const course_found = await db
      .collection("courses")
      .findOne({ id: courseId });

    if (course_found) {
      const updateData = {
        title,
        price,
        description,
      };

      const result = await db
        .collection("courses")
        .updateOne({ id: courseId }, { $set: updateData });

      if (result.modifiedCount === 0) {
        return Response.json(
          { message: "Course not found or no changes made" },
          { status: 404 }
        );
      }

      return Response.json(
        { message: "Course updated successfully" },
        { status: 200 }
      );
    }

    // If no courseId, create a new course
    const newCourse = {
      id: courseId,
      title,
      price,
      description,
      modules: [], // Initialize with an empty array of modules
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("courses").insertOne(newCourse);

    return Response.json(
      {
        message: "Course added successfully",
        courseId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { message: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
};
