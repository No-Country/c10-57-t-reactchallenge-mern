package com.example.conocemelat.repository;

import com.example.conocemelat.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

//    idBooking, user, product, checkIn, checkOut, total

    @Query(value = "SELECT * FROM Booking p WHERE p.id_booking = ?1", nativeQuery = true)
    Booking findByIdBooking(Long idBooking);

    @Query(value = "SELECT * FROM Booking p WHERE p.id_user = ?1", nativeQuery = true)
    Booking findByIdUser(Long idUser);

    @Query(value = "SELECT * FROM Booking p WHERE p.id_product = ?1", nativeQuery = true)
    Booking findByIdProduct(Long idProduct);

    @Query(value = "SELECT * FROM Booking p WHERE p.check_in = ?1", nativeQuery = true)
    Booking findByCheckIn(Date checkIn);

    @Query(value = "SELECT * FROM Booking p WHERE p.check_out = ?1", nativeQuery = true)
    Booking findByCheckOut(Date checkOut);

    @Query(value = "SELECT * FROM booking WHERE total = ?1", nativeQuery = true)
    Booking findByTotal(Double total);
}
