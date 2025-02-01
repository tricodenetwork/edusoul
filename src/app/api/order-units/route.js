import clientPromise from "../../../lib/mongodb";

const updateUnitsOrder = async (req) => {
  try {
    // Parse the JSON body of the request
    const body = await req.json();
    const { courseId, moduleId, units } = body;

    // Validate required fields
    if (!courseId || !moduleId || !units) {
      return Response.json(
        { message: "courseId, moduleId, and units are required" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Find the course by its id
    const course = await db.collection("courses").findOne({ id: courseId });
    if (!course) {
      return Response.json({ message: "Course not found" }, { status: 404 });
    }

    // Find the module within the course using moduleId
    const targetModule = course.modules.find((mod) => mod.id === moduleId);
    if (!targetModule) {
      return Response.json({ message: "Module not found" }, { status: 404 });
    }

    // Optionally, you can sort the units array by an 'order' property here if needed:
    // units.sort((a, b) => a.order - b.order);

    // Update the module's units array with the new order
    const result = await db
      .collection("courses")
      .updateOne(
        { id: courseId, "modules.id": moduleId },
        { $set: { "modules.$.units": units } }
      );

    return Response.json(
      { message: "Unit order updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating unit order:", error);
    return Response.json({ message: "Server Error" }, { status: 500 });
  }
};

export { updateUnitsOrder as POST };
