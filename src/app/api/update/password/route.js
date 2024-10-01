import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

const updatePassword = async (req) => {
  try {
    const { email, currentPassword, newPassword } = await req.json();

    if (!email || !currentPassword || !newPassword) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Find the user by email
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return Response.json({ error: "User not found." }, { status: 404 });
    }

    // Check if the current password is correct
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return Response.json(
        { message: "Incorrect current password." },
        { status: 401 }
      );
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the password in the database
    const updatedUser = await db
      .collection("users")
      .updateOne({ email }, { $set: { password: hashedPassword } });

    if (updatedUser.modifiedCount === 0) {
      return Response.json(
        { message: "Failed to update password." },
        { status: 500 }
      );
    }

    return Response.json(
      { message: "Password updated successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { message: "An error occurred while updating the password." },
      { status: 500 }
    );
  }
};

export { updatePassword as POST };
