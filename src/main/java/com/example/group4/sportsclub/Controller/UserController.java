// package com.example.group4.sportsclub.Controller;

// import com.example.group4.sportsclub.Entity.User;
// import com.example.group4.sportsclub.Repository.UserRepository;
// import org.slf4j.Logger;
// import org.slf4j.LoggerFactory;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/users")
// public class UserController {

//     private static final Logger logger = LoggerFactory.getLogger(UserController.class);

//     @Autowired
//     private UserRepository userRepository;

//     @PostMapping
//     public ResponseEntity<User> createUser(@RequestBody User user) {
//         logger.info("Creating new user: {}", user.getUsername());
//         User savedUser = userRepository.save(user);
//         return ResponseEntity.ok(savedUser);
//     }
// }

