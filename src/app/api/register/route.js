import clientPromise from "@/lib/mongodb";

const register = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("Edusoul");
    const body = await req.json();

    // Check if the email already exists in the database and return a 404 error if so
    const existingUser = await db
      .collection("users")
      .findOne({ email: body.email });

    if (existingUser) {
      return Response.json({ message: "User already exists" }, { status: 400 });
    }

    // Check if any required field is missing
    const requiredFields = ["name", "surname", "email", "password"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return Response.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // If the user does not exist by email or name, create a new user object with the provided data
    const newUser = {
      name: body.name,
      surname: body.name,
      password: body.password,
      email: body.email,
    };

    // Insert the new user into the database
    await db.collection("users").insertOne(newUser);

    return Response.json(
      { message: "User registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { error: "An error occurred while registering" },
      { status: 500 }
    );
  }
};

export { register as POST };
