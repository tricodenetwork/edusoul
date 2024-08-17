import clientPromise from "../../../../lib/mongodb";

const deleteCourse = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const courseName = params.get("course");

    if (!courseName) {
      return new Response(
        JSON.stringify({ message: "Course name is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Delete the course
    const res = await db.collection("courses").deleteOne({ name: courseName });

    if (res.deletedCount === 0) {
      return new Response(JSON.stringify({ message: "Course not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Return a successful response
    return new Response(
      JSON.stringify({ message: "Course deleted successfully!" }),
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

export { deleteCourse as POST };
