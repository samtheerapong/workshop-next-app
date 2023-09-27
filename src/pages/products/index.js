import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductsPage = () => {

  const uri = 'http://localhost:3000/api/products';
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({});
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get(uri)
      .then(res => {
        setData(res.data);
      }).catch(err => {
        console.log(err);
      });
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editProduct) {
      // Edit an existing product
      await axios.put(uri + '/' + editProduct._id, formData)
        .then(res => {
          loadData();
          setEditProduct(null);
        })
        .catch(err => console.log(err));
    } else {
      // Create a new product
      await axios.post(uri, formData)
        .then(res => {
          loadData();
        })
        .catch(err => console.log(err));
    }
    setFormData({});
  }

  const handleEdit = (product) => {
    setEditProduct(product);
    setFormData({
      name: product.name,
      detail: product.detail,
      price: product.price
    });
  }

  const handleCancelEdit = () => {
    setEditProduct(null);
    setFormData({});
  }

  const handleDelete = async (id) => {
    await axios.delete(uri + '/' + id)
      .then(res => {
        loadData();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <h4 className="mt-4">{editProduct ? 'Edit Product' : 'Add Product'}</h4>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name || ''} onChange={handleChange} placeholder="Enter name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Detail:</Form.Label>
          <Form.Control type="text" name="detail" value={formData.detail || ''} onChange={handleChange} placeholder="Enter Detail" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" name="price" value={formData.price || ''} onChange={handleChange} placeholder="Enter Price" />
        </Form.Group>
        <Button variant="primary" type="submit">
          {editProduct ? 'Update Product' : 'Add Product'}
        </Button>
        {editProduct && (
          <Button variant="danger" className="ml-2" onClick={handleCancelEdit}>
            Cancel Edit
          </Button>
        )}
      </form>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Detail</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(item => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.detail}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn btn-danger ml-2" onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
