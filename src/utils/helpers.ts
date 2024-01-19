// capitalize first letter of each word
export const capitalizeWords = (str: string): string => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};