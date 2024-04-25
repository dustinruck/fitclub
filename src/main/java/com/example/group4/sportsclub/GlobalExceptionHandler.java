package com.example.group4.sportsclub;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleGlobalException(Exception exception, WebRequest request) {
        // Log the exception details
        System.err.println(exception.getMessage());

        // Return a generic error response
        return ResponseEntity.internalServerError().body("An error occurred: " + exception.getMessage());
    }
}
