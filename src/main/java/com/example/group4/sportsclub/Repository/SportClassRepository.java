// SportClassRepository.java // src/main/java/com/example/group4/sportsclub/Repository/SportClassRepository.java //

package com.example.group4.sportsclub.Repository;

import com.example.group4.sportsclub.Entity.SportClass;
import com.example.group4.sportsclub.Entity.Yoga;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SportClassRepository extends JpaRepository<SportClass, Long> {
}
