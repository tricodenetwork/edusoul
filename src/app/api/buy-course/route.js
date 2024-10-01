import clientPromise from "@/lib/mongodb";

const buy = async (req) => {
  try {
    // Extract body from the request
    const body = await req.json();
    console.log("Request Body:", body);

    const client = await clientPromise;
    const db = client.db("Edusoul");
    const course = await db.collection("courses").findOne({ id: body.id });
    const user = await db.collection("users").findOne({ email: body.email });

    if (!user || !course) {
      return Response.json(
        { message: "User / Course does not exist" },
        { status: 400 }
      );
    }
    const res = await db
      .collection("users")
      .updateOne({ email: body.email }, { $push: { courses: course } });

    // Return a successful response
    return Response.json(
      {
        message: "Course Purchased successfully!!",
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

export { buy as POST };
