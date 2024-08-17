import { handleUpload } from "@vercel/blob/client";

const add = async (req) => {
  try {
    // Extract body from the request
    const body = await req.json();
    console.log("Request Body:", body);

    const jsonResponse = await handleUpload({
      body,
      request,
      token: process.env.BLOB_READ_WRITE_TOKEN,
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
          const db = client.db("Tricode");
          const newFile = {
            user: request?.query?.company,
            name: blob.pathname,
            url: blob.downloadUrl,
          };

          if (!request?.query?.image) {
            // Insert the new user into the database
            await db.collection("Files").insertOne(newFile);
          } else {
            await db.collection("users").updateOne(
              { email: request?.query?.company },
              {
                $set: {
                  image: blob.url,
                },
              }
            );
          }
        } catch (error) {
          throw new Error("Could not update file ");
        }
      },
    });

    // Return a successful response
    return new Response.json({ message: "Fine" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);

    // Return an error response
    return new Response.json(
      { error: "Something went wrong" },
      {
        status: 500,
      }
    );
  }
};

export { add as POST };
