export const constrainXBetweenMinAndMax = (
  x: number,
  min: number,
  max: number
) => {
  return Math.max(min, Math.min(max, x));
};
