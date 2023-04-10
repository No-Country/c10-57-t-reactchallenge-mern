package com.example.conocelat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.conocelat.model.Booking;

import java.util.*;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    @Query(value = "SELECT * FROM Booking p WHERE p.check_in = ?1 AND p.check_out = ?2", nativeQuery = true)
    public ArrayList<Booking> findBookingByDate(Date checkIn, Date checkOut);

}
