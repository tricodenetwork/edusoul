import clientPromise from "../../../../lib/mongodb";

const deleteModule = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const courseName = params.get("course");
    const moduleName = params.get("module");

    if (!courseName || !moduleName) {
      return new Response(
        JSON.stringify({ message: "Course name and module name are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Delete the module from the course
    const res = await db
      .collection("courses")
      .updateOne(
        { name: courseName },
        { $pull: { modules: { name: moduleName } } }
      );

    if (res.modifiedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Module not found or not deleted" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Return a successful response
    return new Response(
      JSON.stringify({ message: "Module deleted successfully!" }),
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

export { deleteModule as POST };
