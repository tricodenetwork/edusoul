import clientPromise from "../../../lib/mongodb";

const deleteModule = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const courseId = parseInt(params.get("course"));
    const moduleId = parseInt(params.get("module"));

    console.log("courseId", courseId, "moduleId", moduleId);

    if (!courseId || !moduleId) {
      return Response.json(
        { message: "Course ID and Module ID are required" },
        { status: 404 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Check if course exists
    const course = await db.collection("courses").findOne({ id: courseId });

    if (!course) {
      return Response.json(
        { message: "This course does not exist" },
        { status: 404 }
      );
    }

    // Check if the module exists in the course
    const moduleIndex = course.modules?.findIndex(
      (module) => module.id === moduleId
    );

    if (moduleIndex === -1 || moduleIndex === undefined) {
      return Response.json(
        { message: "This module does not exist in the course" },
        { status: 404 }
      );
    }

    // Remove the module from the course
    await db
      .collection("courses")
      .updateOne({ id: courseId }, { $pull: { modules: { id: moduleId } } });

    return Response.json(
      { message: "Module deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
};

export { deleteModule as DELETE };
