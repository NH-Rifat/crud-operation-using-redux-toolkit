const { createSlice } = require('@reduxjs/toolkit');

const {v4: uuidv4} = require('uuid');

const initialProduct = {
  products: [
    { id: uuidv4(), title: 'ASUS Laptop', company: 'ASUS' },
    { id: uuidv4(), title: 'HP Laptop', company: 'HP' },
    { id: uuidv4(), title: 'DELL Laptop', company: 'DELL' },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState: initialProduct,
  reducers: {
    showProducts: (state) => state,
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      // console.log('id',id)
      state.products=state.products.filter(product=>product.id!==id)
    },
    updateProduct: (state, action) => {
      const {id,title,company} = action.payload;
      const isProductExists = state.products.filter((product)=>product.id===id)
      if(isProductExists){
        isProductExists[0].title = title;
        isProductExists[0].company = company;
      }
    },
  },
});

export const { showProducts,addProduct,deleteProduct,updateProduct } = productSlice.actions;

export default productSlice.reducer;
