import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");

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