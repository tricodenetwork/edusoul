"use server";

import toast from "react-hot-toast";
import { getServerAuthSession } from "../app/api/auth/[...nextauth]/route";
import clientPromise from "./mongodb";
import { put } from "@vercel/blob/client";
import { revalidatePath } from "next/cache";

export const getUser = async (email) => {
  try {
    const session = await getServerAuthSession();
    const client = await clientPromise;
    const db = client.db("Edusoul");
    // console.log("session", session);

    const existingUser = await db
      .collection("users")
      .findOne({ email: session?.user?.email });
    // console.log("Existing", existingUser);
    return existingUser;
  } catch (error) {
    console.error(error);
  }
};

export const handleUpload = async (event) => {
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
