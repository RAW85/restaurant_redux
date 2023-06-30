import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
    value: Customer[]
}

interface AddFoodToCustomerPayload {
    food: string;
    id: string;
}
interface RemoveFoodFromCustomerPayload {
    id: string;
    index: number;
}

interface Customer {
    id: string;
    name: string;
    food: string[];
}

const initialState: CustomerState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
            state.value.forEach((customer) => {
                if(customer.id === action.payload.id) {
                    customer.food.push(action.payload.food);
                }
            })
        },
        removeCustomer: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        },
        removeFoodFromCustomer: (state, action: PayloadAction<RemoveFoodFromCustomerPayload>) => {
            state.value.forEach((customer) => {
                if(customer.id === action.payload.id) {
                    customer.food.splice(action.payload.index, 1);
                }
            })
        }
    }
});

export const { addCustomer, addFoodToCustomer, removeCustomer, removeFoodFromCustomer } = customerSlice.actions;

export default customerSlice.reducer;