package com.example.conocelat.service;

import java.util.Date;
import java.util.List;

import com.example.conocelat.model.Booking;

public interface BookingService {
    public List<Booking> listAllBookings();

    public Booking saveBooking(Booking booking);

    public Booking getBookingById(Long id);

    public void deleteBooking(Long id);

    public List<Booking> findBookingsByDate(Date checkIn, Date checkOut);

}
