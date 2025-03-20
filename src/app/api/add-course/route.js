import clientPromise from "../../../lib/mongodb";

export const POST = async (req) => {
  try {
    const formData = await req.formData();

    // Extract fields from FormData
    const title = formData.get("title");
    const price = formData.get("price");
    const priceId = formData.get("priceId");
    const priceId2 = formData.get("priceId2");
    const description = formData.get("description");
    const image = formData.get("image");
    const courseId = parseInt(formData.get("id")); // Optional: For editing
    console.log(courseId, "courseId");

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
        priceId,
        priceId2,
        snippet: description,
      };

      const result = await db
        .collection("courses")
        .updateOne({ id: courseId }, { $set: updateData });

      if (result.modifiedCount === 0) {
        return Response.json({ message: "No changes made" }, { status: 404 });
      }

      return Response.json(
        { message: "Course updated successfully" },
        { status: 200 }
      );
    }

    const imageOptions = [
      "/headphones.png",
      "/leadership.png",
      "/book.png",
      "/hat.png",
    ];
    const randomIndex = Math.floor(Math.random() * imageOptions.length);
    // If no courseId, create a new course
    const newCourse = {
      id: courseId,
      title,
      price,
      priceId,
      priceId2,
      snippet: description,
      imgURL: imageOptions[randomIndex], // Randomly selected image URL
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
