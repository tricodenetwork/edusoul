// tests/mongo.test.ts
import clientPromise from "../lib/mongodb";
import { expect, test } from "vitest";

test("MongoDB connection should be established", async () => {
  try {
    const client = await clientPromise;
    const db = client.db("Edusoul");
    const data = await db
      .collection("users")
      .findOne({ email: "ohwovoriole@gmail.com" });
    console.log(data);
    expect(db).toBeDefined(); // Ensure the db instance is returned
  } catch (error) {
    throw new Error("MongoDB connection failed");
  }
});
