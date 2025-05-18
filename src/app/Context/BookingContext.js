import React, { createContext, useContext, useState } from 'react';

// Create a Context
const BookingContext = createContext();

// Create a Provider Component
export const BookingProvider = ({ children }) => {
    const [bookingDetails, setBookingDetails] = useState({
        amount: 0,
        bookingId: null,
    });

    return (
        <BookingContext.Provider value={{ bookingDetails, setBookingDetails }}>
            {children}
        </BookingContext.Provider>
    );
};

// Create a custom hook for easier access to the context
export const useBooking = () => {
    return useContext(BookingContext);
};
