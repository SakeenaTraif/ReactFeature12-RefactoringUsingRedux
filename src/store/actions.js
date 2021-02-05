// Create ACTION TYPES
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

// ACTIONS
export const updateProduct = (updatedProduct) => {
  console.log(
    "🚀 ~ file: actions.js ~ line 8 ~ updateProduct ~ updatedProduct",
    updatedProduct
  );
  return{
  type: UPDATE_PRODUCT,
  payload: { updatedProduct: updatedProduct },
};
};

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId: productId },
});

export const addProduct = (newProduct) => {
    console.log(
      "🚀 ~ file: actions.js ~ line 18 ~ addProduct ~ newProduct",
      newProduct
    );
    return {
      type: ADD_PRODUCT,
      payload: { newProduct }, // {newProduct: newProduct}
    };
  };
