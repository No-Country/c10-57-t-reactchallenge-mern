package com.example.conocemelat.repository;

import com.example.conocemelat.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
<<<<<<< HEAD
=======
    User findByUserEmail(String email);
>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b

}
