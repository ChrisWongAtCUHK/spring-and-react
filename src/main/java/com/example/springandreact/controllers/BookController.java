package com.example.springandreact.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.example.springandreact.models.Book;
import com.example.springandreact.services.BookService;

@RestController
public class BookController {
    @Autowired
    BookService bookService;
    
    @GetMapping("/api/books")
    public List<Book> books(Model model) {
        List<Book> listOfBooks = bookService.list();
		model.addAttribute("listOfBooks", listOfBooks);
		return listOfBooks;
    }
}