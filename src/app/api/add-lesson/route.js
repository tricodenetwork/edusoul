import clientPromise from "../../../lib/mongodb";

const addLesson = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const courseId = parseInt(params.get("course"));
    const moduleId = parseInt(params.get("module"));

    if (!courseId || !moduleId) {
      return Response.json(
        { message: "Course id and module id are required" },
        { status: 404 }
      );
    }

    // Extract body from the request
    const body = await req.json();
    if (!body) {
      return Response.json(
        { message: "No body found in the request" },
        { status: 404 }
      );
    }
    console.log("Request Body:", body);

    // Check if the lesson name is provided
    const requiredFields = ["title", "id"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return Response.json(
          { message: `${field} is required` },
          { status: 404 }
        );
      }
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Find the course by name
    const course = await db.collection("courses").findOne({ id: courseId });

    if (!course) {
      return Response.json(
        { message: "This course does not exist" },
        { status: 404 }
      );
    }

    // Find the module within the course
    const module = course.modules.find((mod) => mod.id == moduleId);

    if (!module) {
      return Response.json(
        { message: "This module does not exist within the course" },
        { status: 404 }
      );
    }

    // if (module?.units.length == 0) {
    //   await db.collection("courses").updateOne(
    //     { id: courseId, "modules.id": moduleId },
    //     {
    //       $set: { "modules.$.units": [] },
    //     },
    //     { upsert: true }
    //   );
    // }

    // Check if the lesson already exists in the module
    const lessonIndex = module?.units?.findIndex(
      (lesson) => lesson.id === body.id
    );
    // console.log(lessonIndex !== undefined, "module units");
    // return Response.json("Sussess");

    if (lessonIndex ?? -1 !== -1) {
      // Update the existing lesson
      const updateQuery = {
        $set: {
          [`modules.$.units.${lessonIndex}`]: body,
        },
      };

      await db
        .collection("courses")
        .updateOne({ id: courseId, "modules.id": moduleId }, updateQuery);

      return Response.json(
        { message: "Lesson updated successfully!" },
        { status: 200 }
      );
    }

    // Add the new lesson to the module's lessons array
    const res = await db.collection("courses").updateOne(
      { id: courseId, "modules.id": moduleId },
      {
        $push: { "modules.$.units": body },
      }
    );

    // Return a successful response
    return Response.json(
      {
        message: "Lesson added successfully!",
        id: res?.insertedId?.toString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return Response.json(
      { error: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
};

export { addLesson as POST };
