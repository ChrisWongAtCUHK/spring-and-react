import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(-1);
  

  // page onLoad
  useEffect(() => {
    axios.get("/api/getAllCustomers")
      .then(resp => {
        setCustomers(resp.data);
      });
  }, []);

  // form submit
  const submitCustomer = (e) => {
    e.preventDefault();

    const customer = {
      customerName,
      email
    };
    if(id === -1) {
      // add
      axios.post("/api/addCustomer", customer, {
        headers: { "Content-Type": "application/json" }
      })
        .then(resp => {
          // update customer list
          setCustomers([...customers, resp.data]);
  
          // clean up the form
          setCustomerName("");
          setEmail("");
        });
    } else {
      // update
      customer.id = id;
      axios.put("/api/addCustomer", customer, {
        headers: { "Content-Type": "application/json" }
      })
        .then(resp => {
          // update customer list
          setCustomers(customers.map(customer => customer.id === resp.data.id ? resp.data : customer));
  
          // clean up the form
          setCustomerName("");
          setEmail("");
          setId(-1);
        });
    }
  };

  // edit customer
  const editCustomer = (customerId) => {
    axios.get(`/api/getCustomer/${customerId}`)
      .then(resp => {
        const { id, customerName, email } = resp.data;
        setCustomerName(customerName);
        setEmail(email);
        setId(id);
      });
  };

  // delete customer
  const deleteCustomer = (customerId) => {
    axios.delete(`/api/deleteCustomer/${customerId}`)
      .then(() => {
        // update customer list
        setCustomers(customers.filter(customer => customer.id !== customerId));
  
        // clean up the form
        setCustomerName("");
        setEmail("");
        setId(-1);
      });
  };

  return (
    <div>
      <h1>Customer Mart</h1>
      <form onSubmit={submitCustomer}>
        <table>
          <thead>
            <tr>
              <th colSpan="2">Add/Edit customer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Customer Name</td>
              <td><input type="text"
                onChange={event => setCustomerName(event.target.value)}
                value={customerName} /></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="text"
                onChange={event => setEmail(event.target.value)}
                value={email} /></td>
            </tr>
            <tr>
              <td colSpan="2"><input type="submit" value="Submit"
                className="blue-button" /></td>
            </tr>
          </tbody>
        </table>
      </form>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            customers.map(customer => {
              return (
                <tr key={customer.id}>
                  <td>{customer.customerName}</td>
                  <td>{customer.email}</td>
                  <td>
                    <a onClick={() => editCustomer(customer.id)} className="blue-button">Edit</a>
                    | <a onClick={() => deleteCustomer(customer.id)} className="blue-button">Delete</a>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;