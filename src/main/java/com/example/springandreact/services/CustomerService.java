package com.example.springandreact.services;

import java.util.List;

import javax.transaction.Transactional;

import com.example.springandreact.models.Customer;
import com.example.springandreact.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("customerService")
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;

	@Transactional
	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}

	@Transactional
	public Customer getCustomer(Long id) {
		return customerRepository.getOne(id);
	}

	@Transactional
	public Customer addCustomer(Customer customer) {
		customerRepository.save(customer);
		return customer;
	}

	@Transactional
	public Customer updateCustomer(Customer customer) {
		customerRepository.save(customer);
		return customer;
	}

	@Transactional
	public void deleteCustomer(Long id) {
		customerRepository.deleteById(id);
	}
}
