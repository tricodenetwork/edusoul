import clientPromise from "../../../lib/mongodb";

const addLesson = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const courseName = params.get("course");
    const moduleName = params.get("module");

    if (!courseName || !moduleName) {
      return Response.json(
        { message: "Course name and module name are required" },
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
    const requiredFields = ["name"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return Response.json(
          { error: `${field} is required` },
          { status: 404 }
        );
      }
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Find the course by name
    const course = await db.collection("courses").findOne({ name: courseName });

    if (!course) {
      return Response.json(
        { message: "This course does not exist" },
        { status: 404 }
      );
    }

    // Find the module within the course
    const module = course.modules.find((mod) => mod.name === moduleName);

    if (!module) {
      return Response.json(
        { message: "This module does not exist within the course" },
        { status: 404 }
      );
    }

    // Check if the lesson already exists in the module
    const lessonExists = module.lessons?.some(
      (lesson) => lesson.name === body.name
    );

    if (lessonExists) {
      return Response.json(
        { message: "This lesson name already exists in the module" },
        { status: 409 }
      );
    }

    // Add the new lesson to the module's lessons array
    const res = await db.collection("courses").updateOne(
      { name: courseName, "modules.name": moduleName },
      {
        $push: { "modules.$.lessons": body },
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
