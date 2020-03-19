import React, { useState, useEffect } from "react";
import "./App.css";
import fetch from "node-fetch";

function App() {
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");

  // page onLoad
  useEffect(() => {
    fetch("/api/getAllCustomers")
      .then(response => response.json())
      .then(customerList => {
        setCustomers(Array.from(customerList));
      });
  }, []);

  // form submit
  const submitCustomer = (e) => {
    e.preventDefault();

    const customer = {
      customerName,
      email
    };
    fetch("/api/addCustomer", {
      method: "post",
      body: JSON.stringify(customer),
      headers: { "Content-Type": "application/json" },
    })
      .then(response => response.json())
      .then(customer => {
        // update customer list
        setCustomers([...customers, customer]);

        // clean up the form
        setCustomerName("");
        setEmail("");
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