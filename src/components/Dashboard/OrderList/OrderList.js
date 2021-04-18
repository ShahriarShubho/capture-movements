import React, { useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  // onChange={(e) => handleChange(e, order._id)}

  // const handleChange = (e, id) => {
  //   console.log(e, id)
  //   fetch(`http://localhost:5000/update/${id}`, {
  //     method: 'PATCH',
  //     headers: { "Content-Type": "application/json"},
  //     body: JSON.stringify({ 
  //       status : e.target.value
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }
  return (
    <div className="text-center">
      <h3 className="mt-3">Total Order {orders.length}</h3>
      <div></div>
      <Table striped bordered hover responsive size-lg>
        <thead>
          <tr>
            <th>seral</th>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Pay With</th>
            <th>Status</th>
          </tr>
        </thead>
        {orders.map((order, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.serviceName}</td>
              <td>{order.paymentMethod}</td>
              <td>
                <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control  as="select" custom>
                    <option>{order.status}</option>
                    <option value='pending'>Pending</option>
                    <option  value='on going'>On Going</option>
                    <option  value='Done'>Done</option>
                  </Form.Control>
                </Form.Group>
                </Form>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default OrderList;
