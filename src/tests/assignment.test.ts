import { expect, test } from "vitest";
import {
  ASSIGNMENT_PLACEHOLDER,
  getAssignmentButton,
  isSubmittable,
} from "../lib/assignment";

test("new student (no record) gets an enabled Submit button", () => {
  expect(getAssignmentButton(undefined)).toEqual({
    title: "Submit",
    disabled: false,
  });
});

test("student with an existing answer gets an enabled Update Submission button", () => {
  expect(
    getAssignmentButton({ answer: "<p>my answer</p>", status: "retry" })
  ).toEqual({ title: "Update Submission", disabled: false });
});

test("graded student gets a disabled Passed button", () => {
  expect(
    getAssignmentButton({ answer: "<p>my answer</p>", status: "completed" })
  ).toEqual({ title: "Passed", disabled: true });
});

test("placeholder text is not submittable", () => {
  expect(isSubmittable(ASSIGNMENT_PLACEHOLDER)).toBe(false);
});

test("empty or markup-only answers are not submittable", () => {
  expect(isSubmittable("")).toBe(false);
  expect(isSubmittable("<p></p>")).toBe(false);
  expect(isSubmittable("<p>   </p>")).toBe(false);
});

test("a real answer is submittable", () => {
  expect(isSubmittable("<p>My essay answer</p>")).toBe(true);
});
