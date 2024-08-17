import clientPromise from "../../../lib/mongodb";

const add = async (req) => {
  try {
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
    const requiredFields = ["name", "price", "introduction"];
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
    const course = await db.collection("courses").find({ name: body.name });
    if (course) {
      return Response.json(
        { message: "This course already exists" },
        { status: 404 }
      );
    }
    const res = await db.collection("courses").insertOne(body);
    console.log("Response", res);

    // Return a successful response
    return Response.json(
      {
        message: "Course added successfully!! Proceed to add modules.",
        id: res.insertedId.toString(),
      },
      { status: 200 }
    );
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
