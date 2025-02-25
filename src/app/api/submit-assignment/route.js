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

    if (!courseId || !moduleId) {
      return Response.json(
        { message: "Course, module, and unit IDs are required" },
        { status: 400 }
      );
    }

    // Extract request body (assignment submission)
    const body = await req.json();
    const { answer, question } = body;

    if (!answer) {
      return Response.json({ message: "Answer is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    const assignmentObj = {
      module: moduleId,
      course: courseId,
      question,
      answer,
      comment: "",
      grade: "",
      user: session?.user?.email,
      name: session?.user?.name,
    };

    // Check if the assignment already exists
    const existingAssignment = await db.collection("assignments").findOne({
      user: session?.user?.email,
      course: courseId,
      module: moduleId,
    });

    let result;
    if (existingAssignment) {
      // Update the existing assignment
      result = await db.collection("assignments").updateOne(
        {
          user: session?.user?.email,
          course: courseId,
          module: moduleId,
        },
        {
          $set: { answer },
        }
      );
    } else {
      // Insert a new assignment
      result = await db.collection("assignments").insertOne(assignmentObj);
    }

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