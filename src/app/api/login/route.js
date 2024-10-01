import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const login = async (req) => {
  const body = await req.json();
  try {
    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Check if any required field is missing
    const requiredFields = ["password", "email"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return Response.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Check if the email already exists in the database
    const existingUser = await db
      .collection("users")
      .findOne({ email: body.email });

    if (!existingUser) {
      return Response.json({ error: "User not found" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Verify the password using bcrypt
    const passwordMatch = await bcrypt.compare(
      body.password,
      existingUser.password
    );
    console.log("PassMatch:", passwordMatch);

    if (!passwordMatch) {
      return Response.json({ error: "Invalid password" }, { status: 400 });
    }

    // Password is valid, return user data (excluding the password)
    const { password, ...userData } = existingUser;
    return Response.json(userData, { status: 200 });
  } catch (error) {
    console.error("API Error:", error.cause);

    return Response.json(
      { error: `An error occurred while processing the request:` },
      { status: 500 }
    );
  }
};

export { login as POST };
