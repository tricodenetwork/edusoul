import clientPromise from "@/lib/mongodb";

const user = async (req) => {
  const { email } = await req.json();
  try {
    const client = await clientPromise;
    const db = client.db("Edusoul");

    if (!email) {
      return Response.json({ error: `email is required` }, { status: 400 });
    }

    // Check if the email already exists in the database
    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      const { password, ...userData } = existingUser;
      return Response.json(userData, { status: 200 });
    }
  } catch (error) {
    console.error("API Error:", error.cause);

    return Response.json(
      { error: `An error occurred while fetching user` },
      { status: 500 }
    );
  }
};

export { user as POST };
