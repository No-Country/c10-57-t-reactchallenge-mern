import React, { useState } from 'react';

export default function Calendar() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleCheckInDateChange = (event) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event) => {
    setCheckOutDate(event.target.value);
  };

  return (
    <div className="data__Wheregoing">
      <div className="data__inputs">
        <input
          className="input-data"
          placeholder="fecha de ida"
          type="date"
          value={checkInDate}
          onChange={handleCheckInDateChange}
        />
        <input
          className="input-data"
          placeholder="fecha de retorno"
          type="date"
          value={checkOutDate}
          onChange={handleCheckOutDateChange}
        />
      </div>
    </div>
  );
}
