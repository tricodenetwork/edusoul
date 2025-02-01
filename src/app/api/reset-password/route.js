import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const { password, email } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "New password and email is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password in the database
    await db
      .collection("users")
      .updateOne({ email }, { $set: { password: hashedPassword } });

    // Delete the OTP record after successful password reset
    await db.collection("password_reset_otps").deleteOne({ email });

    return Response.json(
      { message: "Password reset successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error resetting password:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
