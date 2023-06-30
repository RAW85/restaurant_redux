import React from 'react';
import { useDispatch } from "react-redux";
import { removeReservation } from '../features/reservationSlice';
import { addCustomer } from '../features/customerSlice';
import { v4 as uuid } from 'uuid';
import { BsFillTrash3Fill as DeleteIcon, BsPersonFillAdd as PersonAddIcon } from "react-icons/bs";

interface ReservationCardTypes {
    name: string;
    index: number;
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {

    const dispatch = useDispatch();

    return (
        <>
            <div className="reservation-card-container" >
                <DeleteIcon className="trash-icon" onClick={() => {
                dispatch(removeReservation(index));
                }}/>
                <PersonAddIcon className="add-icon" onClick={() => {
                    dispatch(removeReservation(index));
                    dispatch(addCustomer({
                        id: uuid(),
                        name,
                        food: []
                    }));
                }}/>
                <div className="customer-name">{name}</div>
            </div>
        </>
    )
}