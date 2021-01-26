const getNestedObjectValues = (obj) =>
  obj && typeof obj === "object"
    ? Object.values(obj).map(getNestedObjectValues).flat()
    : [obj];

export default getNestedObjectValues;
