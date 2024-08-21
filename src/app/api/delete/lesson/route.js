import clientPromise from "../../../../lib/mongodb";

const deleteLesson = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const courseName = params.get("course");
    const moduleName = params.get("module");
    const lessonName = params.get("lesson");

    if (!courseName || !moduleName || !lessonName) {
      return new Response(
        JSON.stringify({
          message: "Course name, module name, and lesson name are required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Delete the lesson from the module
    const res = await db
      .collection("courses")
      .updateOne(
        { name: courseName, "modules.name": moduleName },
        { $pull: { "modules.$.lessons": { name: lessonName } } }
      );

    if (res.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Lesson not found or not deleted" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Return a successful response
    return new Response(
      JSON.stringify({ message: "Lesson deleted successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export { deleteLesson as POST };
