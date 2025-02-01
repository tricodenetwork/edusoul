import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return Response.json(
        { message: "Email and OTP are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Find the OTP in the database
    const otpRecord = await db
      .collection("password_reset_otps")
      .findOne({ email, otp });

    if (!otpRecord) {
      return Response.json(
        { message: "Invalid or expired OTP" },
        { status: 400 }
      );
    }

    return Response.json(
      { message: "OTP verified successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return Response.json({ message: "Failed to verify OTP" }, { status: 500 });
  }
}
