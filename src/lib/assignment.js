export const ASSIGNMENT_PLACEHOLDER = "<p>Enter your assignments here</p>";

export const getAssignmentButton = (userAssignment) => {
  if (userAssignment?.status == "completed") {
    return { title: "Passed", disabled: true };
  }
  if (userAssignment?.answer) {
    return { title: "Update Submission", disabled: false };
  }
  return { title: "Submit", disabled: false };
};

export const isSubmittable = (answer) => {
  if (!answer || answer === ASSIGNMENT_PLACEHOLDER) return false;
  return answer.replace(/<[^>]*>/g, "").trim().length > 0;
};
