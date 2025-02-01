"use server";

import { signIn, signOut } from "@/auth";
import { baseUrl } from "../../config/config";

export const SignInWithCredentials = async ({ email, password }) => {
  const result = await signIn("credentials", {
    redirect: false,
    email,
    password,
    callbackUrl: `${baseUrl}dashboard`,
  });

  return result;
};

export const SignInWithGoogle = async () => {
  await signIn("google", {
    redirectTo: `${baseUrl}dashboard`,
    redirect: true,
  });
};

export const signOutOfApp = async () => {
  await signOut({ redirect: true, redirectTo: "/auth/login" });
};
