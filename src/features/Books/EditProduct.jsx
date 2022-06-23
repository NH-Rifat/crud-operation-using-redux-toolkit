import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateProduct } from './ProductSlice';
import {useNavigate} from 'react-router-dom'

const EditProduct = () => {
  const location = useLocation();
  // console.log(location);
  const [id, setId] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [company, setCompany] = useState(location.state.company);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(id,title,company);
  const handleEdit=(e)=>{
    e.preventDefault();
    dispatch(updateProduct({id,title,company}))
    navigate('/showProduct',{replace:true})
  }

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleEdit}>
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
        <button type='submit'>Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
