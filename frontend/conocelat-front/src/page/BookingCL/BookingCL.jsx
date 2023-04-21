import { useEffect } from "react";
import "./BookingCL.css";
import { useDispatch, useSelector } from "react-redux";
import { startListBookingId } from "../../store/conoceLat/Users/userthunk";
import { CardBooking } from "./CardBooking";

export const BookingCL = () => {
  const {userId} = useSelector((state) => state.auth);
  const {bookins=[]} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startListBookingId(userId));
  }, [userId]);

  return (
    <div className="container-booking">
      <div className='booking-data'>
      <div className="container mx-auto">
        <div className="grid gap-8 px-4 my-8 md:p-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {
          bookins.length === 0 ? (
          <p>No hay booking</p>
          ) : (
          bookins.map((booking, index) => <CardBooking booking={booking} key={index} />)
          )}
        </div>
      </div>
      </div>
    </div>
  )
}
