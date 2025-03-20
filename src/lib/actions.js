"use server";

import toast from "react-hot-toast";
import clientPromise from "./mongodb";
import { put } from "@vercel/blob/client";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";

export const getUser = async () => {
  try {
    const session = await auth();
    const client = await clientPromise;
    const db = client.db("Edusoul");

    const existingUser = await db
      .collection("users")
      .findOne({ email: session?.user?.email }, { projection: { _id: 0 } });
    return existingUser;
  } catch (error) {
    console.error(error);
  }
};

export const handleUpload = async (event, toast) => {
  const file = event.target.files[0];

  const toastId = toast.loading("Uploading...");
  try {
    const blob = await put(file.name, file, {
      access: "public",
    });

    const res = await axios.post(
      `${baseUrl}api/upload/email=${session?.user?.email}&url=${blob.url}`
    );
    console.log(res, blob);
    toast.success("Upload successful!", { id: toastId });
    revalidatePath("/");
  } catch (error) {
    toast.error("Error uploading the file.", { id: toastId });
    console.error("There was an error uploading the file.", error.response);
  }
};

export const addCourseToUser = async (courseId) => {
  const session = await auth();

  if (!session?.user) {
    return { ok: false, message: "Not authenticated" };
  }

  try {
    const client = await clientPromise;
    const db = client.db("Edusoul");

    // Fetch the course from the database
    const course = await db
      .collection("courses")
      .findOne({ id: parseInt(courseId) });

    if (!course) {
      return { ok: false, message: "Course not found" };
    }

    // Destructure and exclude 'intro' and module notes
    const { id, modules, ...rest } = course;

    const user = await db
      .collection("users")
      .findOne({ email: session?.user?.email });

    if (!user) {
      return { ok: false, message: "User not found" };
    }

    if (user?.courses?.some((c) => c.id === course.id)) {
      return { ok: false, message: "Already registered" };
    }

    await db.collection("users").updateOne(
      { email: session?.user?.email },
      {
        $push: {
          courses: { id, registerd: Date.now() },
        },
      }
    );

    return { ok: true, message: "Course added to user list successfully!!" };
  } catch (error) {
    console.error("Error", error);
    return { ok: false, message: error.message };
  }
};

export const sendOtp = async (email) => {
  try {
    const response = await fetch("/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    console.log(response.ok, response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
