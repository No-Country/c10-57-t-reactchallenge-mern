package com.example.conocemelat.repository;

import com.example.conocemelat.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends JpaRepository<User, Long> {

//    IdUser, Role, userName, userLastName, userEmail, userPassword

    @Query(value = "SELECT * FROM User p WHERE p.id_user = ?1", nativeQuery = true)
    User findByIdUser(Long idUser);

    @Query(value = "SELECT * FROM User p WHERE p.role = ?1", nativeQuery = true)
    User findByRole(String role);

    @Query(value = "SELECT * FROM User p WHERE p.user_name = ?1", nativeQuery = true)
    User findByUserName(String userName);

    @Query(value = "SELECT * FROM User p WHERE p.user_last_name = ?1", nativeQuery = true)
    User findByUserLastName(String userLastName);

    @Query(value = "SELECT * FROM User p WHERE p.user_email = ?1", nativeQuery = true)
    User findByUserEmail(String userEmail);

    @Query(value = "SELECT * FROM User p WHERE p.user_password = ?1", nativeQuery = true)
    User findByUserPassword(String userPassword);
}
