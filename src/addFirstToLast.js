const addFirstToLast = (arrOfStrings) => {
  if (!arrOfStrings.length) return "";

  return `${arrOfStrings[0]}${arrOfStrings[arrOfStrings.length - 1]}`;
};

export { addFirstToLast };
