package com.example.group4.sportsclub.web.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Classes {

  public int id;
  public String name;
  public String description;
  public int trainer_id;
  public LocalDateTime start_time;
  public LocalDateTime end_time;

}
