import clientPromise from "../../../lib/mongodb";

const deleteUnit = async (req) => {
  try {
    // Extract URL params from the request
    const params = req.nextUrl.searchParams;
    const courseId = parseInt(params.get("course"));
    const moduleId = parseInt(params.get("module"));
    const unitId = parseInt(params.get("unit"));

    if (!courseId || !moduleId || !unitId) {
      return Response.json(
        { message: "Course id, module id, and unit id are required" },
        { status: 404 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Find the course by id
    const course = await db.collection("courses").findOne({ id: courseId });

    if (!course) {
      return Response.json(
        { message: "This course does not exist" },
        { status: 404 }
      );
    }

    // Find the module within the course
    const module = course.modules.find((mod) => mod.id === moduleId);

    if (!module) {
      return Response.json(
        { message: "This module does not exist within the course" },
        { status: 404 }
      );
    }

    // Check if the unit exists in the module
    const unitIndex = module?.units?.findIndex((unit) => unit.id === unitId);

    if (unitIndex === -1 || !module.units || module.units.length === 0) {
      return Response.json(
        { message: "This unit does not exist within the module" },
        { status: 404 }
      );
    }

    // Remove the unit from the array
    const updateQuery = {
      $pull: {
        "modules.$.units": { id: unitId },
      },
    };

    await db
      .collection("courses")
      .updateOne({ id: courseId, "modules.id": moduleId }, updateQuery);

    return Response.json(
      { message: "Unit deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    return Response.json(
      { error: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
};

export { deleteUnit as DELETE };
