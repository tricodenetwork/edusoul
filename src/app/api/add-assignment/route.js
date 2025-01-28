import clientPromise from "../../../lib/mongodb";

const add = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const courseId = parseInt(params.get("course"));
    const moduleId = parseInt(params.get("module"));

    if (!courseId || !moduleId) {
      return Response.json(
        { message: "No course id or module id  in the request" },
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
    const requiredFields = ["assignment"];
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

    // Check if courseId exists
    const course_found = await db
      .collection("courses")
      .findOne({ id: courseId });

    if (course_found) {
      // Check if the module already exists in the course
      const moduleIndex = course_found.modules?.findIndex(
        (module) => module.id == moduleId
      );

      if (moduleIndex !== -1) {
        // Update the module title
        await db
          .collection("courses")
          .updateOne(
            { id: courseId, "modules.id": moduleId },
            { $set: { "modules.$.assignment": body.assignment } }
          );

        return Response.json(
          { message: "Assignment updated successfully" },
          { status: 200 }
        );
      } else {
        return Response.json(
          { message: "This module does not exist" },
          { status: 404 }
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
      { message: "Something went wrong with the server" },
      {
        status: 500,
      }
    );
  }
};

export { add as POST, add as PUT };
