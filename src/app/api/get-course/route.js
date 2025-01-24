import clientPromise from "@/lib/mongodb";

const getCourse = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const id = params.get("id");
    console.log("id:", id);

    const client = await clientPromise;
    const db = client.db("Edusoul");

    const course = await db.collection("courses").findOne({ id: parseInt(id) });
    console.log(course);
    // Return a successful response
    return Response.json({ course }, { status: 200 });
  } catch (error) {
    // console.error("Error:", error);

    // Return an error response
    return Response.json(
      { error: error },
      {
        status: 500,
      }
    );
  }
};

export { getCourse as GET };
