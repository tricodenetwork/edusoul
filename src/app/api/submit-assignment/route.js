import { auth } from "@/auth";
import clientPromise from "../../../lib/mongodb";

export const submitAssignment = async (req) => {
  try {
    // Authenticate the user
    const session = await auth();
    if (!session?.user) {
      return Response.json({ message: "Not authenticated" }, { status: 401 });
    }

    // Extract URL params (course and module IDs)
    const params = req.nextUrl.searchParams;
    const courseId = parseInt(params.get("course"));
    const moduleId = parseInt(params.get("module"));
    const unitId = parseInt(params.get("unit"));

    if (!courseId || !moduleId || !unitId) {
      return Response.json(
        { message: "Course ,module  and unit id's are required" },
        { status: 400 }
      );
    }

    // Extract request body (assignment submission)
    const body = await req.json();
    const { answer } = body;

    if (!answer) {
      return Response.json({ message: "Answer is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    const assignmentObj = {
      module: moduleId,
      course: courseId,
      unit: unitId,
      answer,
      comment: "",
      grade: "",
      user: session.user.email,
    };

    // Update the assignment if it exists; otherwise, insert a new document.
    // We use the filter { user, course, module } to locate the assignment.
    const result = await db.collection("assignments").updateOne(
      {
        user: session.user.email,
        course: courseId,
        module: moduleId,
        unit: unitId,
      },
      {
        // If an assignment document already exists, update the answer.
        $set: { answer },
        // If the document is inserted for the first time, add the remaining fields.
        $setOnInsert: assignmentObj,
      },
      { upsert: true }
    );

    return Response.json(
      { message: "Assignment submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting assignment:", error);
    return Response.json({ message: "Server Error" }, { status: 500 });
  }
};

export { submitAssignment as POST };
