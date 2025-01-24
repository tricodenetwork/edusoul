import clientPromise from "../../../lib/mongodb";

const add = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const course = params.get("course");
    console.log("course", course);

    if (!course) {
      return Response.json(
        { message: "No course name in the request" },
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

    // Check if any required field is missing
    const requiredFields = ["title"];
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

    // Check if course exists
    const course_found = await db
      .collection("courses")
      .findOne({ title: course });
    console.log(course_found);

    if (course_found) {
      // Check if the module already exists in the course
      const moduleIndex = course_found.modules?.findIndex(
        (module) => module.id == body.id
      );

      if (moduleIndex !== -1) {
        // Update the module title
        await db
          .collection("courses")
          .updateOne(
            { title: course, "modules.id": body.id },
            { $set: { "modules.$.title": body.title } }
          );

        return Response.json(
          { message: "Module title updated successfully" },
          { status: 200 }
        );
      } else {
        // Add the new module
        await db
          .collection("courses")
          .updateOne(
            { title: course },
            { $push: { modules: { id: body.newId, title: body.title } } }
          );

        return Response.json(
          { message: "Module added successfully" },
          { status: 200 }
        );
      }
    } else {
      return Response.json(
        { message: "This course does not exist" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return new Response.json(
      { error: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
};

export { add as POST, add as PUT };
