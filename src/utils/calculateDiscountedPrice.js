export const calculateDiscountedPrice = (originalPrice, discount) => {
  if (!originalPrice || !discount) return originalPrice; // return original price if no discount
  const discountAmount = (originalPrice * discount) / 100;
  return originalPrice - discountAmount;
};
