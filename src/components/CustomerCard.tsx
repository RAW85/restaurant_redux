import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer, removeCustomer, removeFoodFromCustomer } from "../features/customerSlice";
import { BsFillTrash3Fill as DeleteIcon, BsPersonFillAdd as PersonAddIcon } from "react-icons/bs";

interface CustomerCardTypes {
    id: string;
    name: string;
    food: string[];
    index: number;
}

export default function CustomerCard({ id, name, food, index }: CustomerCardTypes) {
    const dispatch = useDispatch();
    const [customerFoodInput, setCustomerFoodInput] = useState("");

    return (
        <div className="customer-food-card-container">
            <p className="customer-name">{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((food, index) => {
                        return <p className="food-items" onClick={() => {dispatch(removeFoodFromCustomer({index, id}))}}>{food}</p>
                    })}
                </div>
                <div className="customer-food-input-container">
                <input
                    title="add-items"
                    value={customerFoodInput}
                    onChange={(e) => setCustomerFoodInput(e.target.value)}
                />
                <button className="add-button" onClick={() => {
                    if(!customerFoodInput) return;
                    dispatch(addFoodToCustomer({
                        id,
                        food: customerFoodInput
                    }));
                    setCustomerFoodInput("");
                }}>ADD</button>
                <DeleteIcon className="trash-icon-customer" onClick={() => {
                dispatch(removeCustomer(index));
                }}/>
                </div>
            </div>
        </div>
    )
}