import clientPromise from "@/lib/mongodb";

const update = async (req) => {
  try {
    const { email, name, surname, bio } = await req.json();

    if (!email || !name || !surname || !bio) {
      return Response.json(
        { message: "All fields (email, name, surname, bio) are required." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Check if the user exists
    const existingUser = await db.collection("users").findOne({ email });
    if (!existingUser) {
      return Response.json({ message: "User not found." }, { status: 404 });
    }

    // Update the user's profile
    const updatedUser = await db.collection("users").updateOne(
      { email },
      {
        $set: {
          name,
          surname,
          bio,
        },
      }
    );

    if (updatedUser.modifiedCount === 0) {
      return Response.json(
        { message: "Failed to update user profile." },
        { status: 500 }
      );
    }

    return Response.json(
      { message: "Profile updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { message: "An error occurred while updating the profile." },
      { status: 500 }
    );
  }
};

export { update as POST };
