import clientPromise from "@/lib/mongodb";

export const DELETE = async (req) => {
  try {
    const params = req.nextUrl.searchParams;
    const notificationId = params.get("id");

    if (!notificationId) {
      return Response.json(
        { message: "Notification ID is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    const result = await db
      .collection("users")
      .updateOne(
        { "notifications.notificationId": notificationId },
        { $pull: { notifications: { notificationId } } }
      );

    if (result.modifiedCount === 0) {
      return Response.json(
        { message: "Notification not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Notification deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting notification:", error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};
