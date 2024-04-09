package com.example.group4.sportsclub.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RouteForwardingController {

    @RequestMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        // Forward to home page so that client-side routing can take over
        return "forward:/";
    }
}
