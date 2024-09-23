import { describe, expect, Mock, test, vi } from "vitest";
import { getServerAuthSession } from "../app/api/auth/[...nextauth]/route";

describe("Testing the auth session", () => {
  // Mock the getServerAuthSession function
  vi.mock("../app/api/auth/[...nextauth]/route", () => ({
    getServerAuthSession: vi.fn(),
  }));

  test("getServerAuthSession should return a valid session", async () => {
    const mockSession = {
      user: { email: "ohwovoriole@gmail.com", name: "Ovodo Ohwovoriole" },
    };

    // Mock the getServerAuthSession to return a valid session
    (getServerAuthSession as Mock).mockResolvedValue(mockSession);

    // Call the getServerAuthSession function and await its result
    const session = await getServerAuthSession();

    // Assert that the session is valid and contains the correct data
    expect(session).toEqual(mockSession);
    expect(session.user?.email).toBe("ohwovoriole@gmail.com");
    expect(session.user?.name).toBe("Ovodo Ohwovoriole");
  });

  test("getServerAuthSession should return null if session is invalid", async () => {
    // Mock getServerAuthSession to return null
    (getServerAuthSession as Mock).mockResolvedValue(null);

    // Call the getServerAuthSession function and await its result
    const session = await getServerAuthSession();

    // Assert that session is null when no valid session is found
    expect(session).toBeNull();
  });
});
