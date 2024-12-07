export const generatePosition = (factor, isPos, clientX, clientY) => {
  const sign = isPos ? 1 : -1;
  const x = (clientX - window.innerWidth / 2) * factor * sign;
  const y = (clientY - window.innerHeight / 2) * factor * sign;
  return { x, y };
};
