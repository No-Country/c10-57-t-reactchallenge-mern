package com.example.conocelat.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.conocelat.model.Booking;
import com.example.conocelat.repository.BookingRepository;
import com.example.conocelat.service.BookingService;

import java.util.Date;
import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    public BookingRepository bookingRepository;

    @Override
    public List<Booking> listAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    @Override
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).get();
    }

    @Override
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }

    @Override
    public List<Booking> findBookingsByDate(Date checkIn, Date checkOut){
        return bookingRepository.findBookingByDate(checkIn, checkOut);
    }


}
