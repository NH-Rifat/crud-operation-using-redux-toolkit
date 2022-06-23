import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from './ProductSlice';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
  const products = useSelector((state) => state.productsReducer.products);
  // console.log(products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <h1>List of Products</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => {
              const { id, title, company } = product;

              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{company}</td>
                  <td>
                    <Link to='/editProduct' state={{id,title,company}}>
                      <button>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProduct;
