import clientPromise from "@/lib/mongodb";

const assignments = async (req) => {
  try {
    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Fetch all assignments from the database
    const assignments = await db.collection("assignments").find().toArray();

    if (assignments) {
      return Response.json(assignments, { status: 200 });
    }
  } catch (error) {
    console.error("API Error:", error.cause);

    return Response.json(
      { error: `An error occurred while fetching assignments` },
      { status: 500 }
    );
  }
};

export { assignments as GET };