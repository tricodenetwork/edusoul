import { expect, Mock, test, vi } from "vitest";
import { getUser } from "../lib/actions";
import { getServerAuthSession } from "../app/api/auth/[...nextauth]/route";
import clientPromise from "../lib/mongodb";
import { ObjectId } from "mongodb";

vi.mock("../app/api/auth/[...nextauth]/route", () => ({
  getServerAuthSession: vi.fn(), // Mock the session function
}));

// Test case
test("getUser should return the user with the provided email", async () => {
  const mockUser = {
    _id: new ObjectId("66ae5f081824b9aa9bbc61e5"),
    name: "Ovodo Ohwovoriole",
    email: "ohwovoriole@gmail.com",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocI5Dsk9YqzGIo_8shdHUz8zhNbXojssdVZXR0brWJMJCiUIbw=s96-c",
    emailVerified: null,
  };

  // Mock the getServerAuthSession response
  (getServerAuthSession as Mock).mockResolvedValue({
    user: { email: "ohwovoriole@gmail.com", hi: "Ovd" },
  });

  // Call the getUser function
  const result = await getUser("ohwovoriole@gmail.com");

  // Assert that the function returns the correct user
  expect(result).toEqual(mockUser);
});
