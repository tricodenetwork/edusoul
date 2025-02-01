import clientPromise from "@/lib/mongodb";

const courses = async (req) => {
  try {
    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Check if the email already exists in the database
    const users = await db.collection("users").find().toArray();

    if (users) {
      return Response.json(users, { status: 200 });
    }
  } catch (error) {
    console.error("API Error:", error.cause);

    return Response.json(
      { message: `An error occurred while fetching courses` },
      { status: 500 }
    );
  }
};

export { courses as GET };
