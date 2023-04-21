package com.example.conocemelat.service;

import com.example.conocemelat.model.Booking;

import java.util.Date;
import java.util.List;

public interface BookingService {
    public List<Booking> listAllBookings();

    public Booking saveBooking(Booking booking);

    public Booking getBookingById(Long id);

    public void deleteBooking(Long id);

    public List<Booking> findBookingsByDate(Date checkIn, Date checkOut);

<<<<<<< HEAD
=======
    public List<Booking> findAllBookingsByProduct(Long id);

    public List<Booking> findAllBookingsByUser(Long id);

>>>>>>> 83da693dbe810f2162a0966e2450fbfe820da72b
}
