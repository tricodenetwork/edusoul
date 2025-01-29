import clientPromise from "../../../lib/mongodb";

export const DELETE = async (req) => {
  try {
    const params = req.nextUrl.searchParams;
    const courseId = parseInt(params.get("id"));

    if (!courseId) {
      return Response.json(
        { message: "Course ID is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    const result = await db.collection("courses").deleteOne({ id: courseId });

    if (result.deletedCount === 0) {
      return Response.json({ message: "Course not found" }, { status: 404 });
    }

    return Response.json(
      { message: "Course deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      { message: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
};
