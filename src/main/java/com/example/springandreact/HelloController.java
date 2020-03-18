package com.example.springandreact;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

    @PostMapping("/api/world")
    public ResponseEntity<String> world() {
        return new ResponseEntity<>("{\"time\" : \"" + new Date() + "\"}", HttpStatus.OK);
    }
}