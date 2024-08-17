import clientPromise from "../../../lib/mongodb";

const add = async (req) => {
  try {
    // Extract URL params from the request",
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

    // check if course already exists
    const course_found = await db
      .collection("courses")
      .findOne({ name: course });
    console.log(course_found);

    if (course_found) {
      // Check if the module already exists in the course
      const moduleExists = course_found.modules?.some(
        (module) => module.name === body.name
      );

      if (moduleExists) {
        return Response.json(
          { message: "This module name already exists in the course" },
          { status: 409 }
        );
      }
      const res = await db.collection("courses").updateOne(
        { name: course },
        {
          $push: { modules: body },
        }
      );

      // Return a successful response
      return Response.json(
        {
          message: "module added successfully!!",
          id: res?.insertedId?.toString(),
        },
        { status: 200 }
      );
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

export { add as POST };
