import clientPromise from "@/lib/mongodb";
import { handleUpload } from "@vercel/blob/client";
import { NextResponse } from "next/server";

const add = async (req) => {
  try {
    // Extract body from the request
    const body = await req.json();
    console.log("Request Body:", body);
    const params = req.nextUrl.searchParams;
    const email = params.get("email");
    console.log("token", process.env.BLOB_READ_WRITE_TOKEN);

    const jsonResponse = await handleUpload({
      body,
      req,
      onBeforeGenerateToken: async (pathname /*, clientPayload */) => {
        // Generate a client token for the browser to upload the file
        // ⚠️ Authenticate and authorize users before generating the token.
        // Otherwise, you're allowing anonymous uploads.

        return {
          // allowedContentTypes: ["image/jpeg", "image/png", "image/gif"],
          tokenPayload: JSON.stringify({
            // optional, sent to your server on upload completion
            // you could pass a user id from auth, or a value from clientPayload
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Get notified of client upload completion
        // ⚠️ This will not work on `localhost` websites,
        // Use ngrok or similar to get the full upload flow

        console.log("blob upload completed", blob, tokenPayload);

        try {
          // Run any logic after the file upload completed
          // const { userId } = JSON.parse(tokenPayload);
          // await db.update({ avatar: blob.url, userId });
          const client = await clientPromise;
          const db = client.db("Edusoul");

          // const newFile = {
          //   user: email,
          //   name: blob.pathname,
          //   url: blob.downloadUrl,
          // };

          await db.collection("users").updateOne(
            { email: email },
            {
              $set: {
                image: blob.url,
              },
            }
          );
        } catch (error) {
          throw new Error("Could not update file ");
        }
      },
    });

    // Return a successful response
    return NextResponse.json(jsonResponse, { status: 200 });
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return NextResponse.json(
      { error: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
};

export { add as POST };
