import clientPromise from "@/lib/mongodb";

export const DELETE = async (req) => {
  try {
    const params = req.nextUrl.searchParams;
    const email = params.get("email");
    const title = params.get("title");
    const message = params.get("message");

    if (!email || !title || !message) {
      return Response.json(
        { message: "Email, title, and message are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    const result = await db.collection("users").updateOne(
      { email },
      {
        $pull: {
          notifications: {
            title,
            message,
          },
        },
      }
    );

    if (result.modifiedCount === 0) {
      return Response.json(
        { message: "Notification not found or already deleted" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Notification deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting notification:", error);
    return Response.json({ message: "Server Error" }, { status: 500 });
  }
};
