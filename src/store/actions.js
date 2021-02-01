// Create ACTION TYPES
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// ACTIONS
export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId: productId },
});