import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addProduct } from './ProductSlice';
import {useNavigate} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  const numOfProducts = useSelector(
    (state) => state.productsReducer.products.length
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { id: uuidv4(), title: title, company: company };
    dispatch(addProduct(product));
    navigate('/showProduct')
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <div className='form_field'>
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form_field'>
          <label htmlFor='company'>Title: </label>
          <input
            type='text'
            id='company'
            name='company'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
