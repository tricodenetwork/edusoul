export const convertToSubcurrency = (amount, factor = 100) => {
  return Math.round(amount * factor);
};

export const proseFormatting =
  "prose-h1:text-3xl  prose-h2:text-2xl  prose-blockquote:text-xs prose-blockquote:font-semibold prose-blockquote:italic prose-ol:list-decimal prose-ul:list-disc prose-li:ml-6 prose-li:my-2";
