import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("");
  const dispatch = useDispatch();

  const reservations = useSelector((state: RootState) => state.reservations.value);
  const customers = useSelector((state: RootState) => state.customer.value);

  const handleAddReservations = () => {
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput));
    setReservationNameInput("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              title="add-reservation"
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button className="add-button" onClick={handleAddReservations}>ADD</button>
          </div>
        </div>
        <div className="customer-food-container">
              {customers.map((customer, index) => {
                return <CustomerCard id={customer.id} name={customer.name} food={customer.food} index={index}/>;
              })}
        </div>
      </div>
    </div>
  );
}

export default App;