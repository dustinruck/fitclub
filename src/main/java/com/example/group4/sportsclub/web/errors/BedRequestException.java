package com.example.group4.sportsclub.web.errors;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BedRequestException extends RuntimeException{

  public BedRequestException() {
    super();
  }

  public BedRequestException(String message) {
    super(message);
  }

  public BedRequestException(String message, Throwable cause) {
    super(message, cause);
  }

  public BedRequestException(Throwable cause) {
    super(cause);
  }
}
