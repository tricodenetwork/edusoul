export const convertToSubcurrency = (amount, factor = 100) => {
  return Math.round(amount * factor);
};

export const proseFormatting =
  "prose-h1:text-3xl  prose-h2:text-2xl  prose-blockquote:text-xs prose-blockquote:font-semibold prose-blockquote:italic prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6 prose-li:my-2";

export const formatDateRange = (start, end) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  const startDate = new Date(start).toLocaleDateString("en-US", options);
  const endDate = new Date(end).toLocaleDateString("en-US", options);

  const [startDay, startMonth, startYear] = startDate.split(" ");
  const [endDay, endMonth, endYear] = endDate.split(" ");

  return `${startDay} - ${endDay} ${endMonth} ${endYear}`;
};

export const formatDateWithSuffix = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // Covers 11th to 19th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${getDaySuffix(day)} ${month} ${year}`;
};
