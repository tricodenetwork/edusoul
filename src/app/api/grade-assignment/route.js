import { auth } from "@/auth";
import clientPromise from "../../../lib/mongodb";

export const gradeAssignment = async (req) => {
  try {
    const session = await auth();
    if (!session?.user) {
      return Response.json({ message: "Not authenticated" }, { status: 401 });
    }

    const params = req.nextUrl.searchParams;
    const courseId = parseInt(params.get("course"));
    const moduleId = parseInt(params.get("module"));
    const { user, comment, grade } = await req.json();

    if (!courseId || !moduleId || !user || !grade|| !comment) {
      return Response.json(
        { message: "Course, module, user, comment, and grade are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("Edusoul");

    const result = await db.collection("assignments").updateOne(
      {
        user: user,
        course: courseId,
        module: moduleId,
      },
      {
        $set: { comment, grade,status: parseInt(grade) >=60 ?"completed":"retry" },
      }
    );

   

    const updateNotification = await db.collection("users").updateOne(
      { email: user },
      {
        $push: {
          notifications: {
            title: "Assignment Update",
            message: parseInt(grade) >= 60
              ? `Congrats 🍾, Assignment for module ${moduleId} completed proceed to next module`
              : `Sorry 📛, Assignment for module ${moduleId} failed try again`,
            isRead: false,
          },
        },
      }
    )

    if (result.modifiedCount === 0) {
      return Response.json({ message: "Assignment not found or already graded" }, { status: 404 });
    }
    if (updateNotification.modifiedCount === 0) {
      return Response.json({ message: "Error updating user notification" }, { status: 404 });
    }

    return Response.json(
      { message: "Assignment graded successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error grading assignment:", error);
    return Response.json({ message: "Server Error" }, { status: 500 });
  }
};

export { gradeAssignment as POST };