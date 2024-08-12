import { createSlice } from "@reduxjs/toolkit";

export const TeamnameSlice=createSlice(
    {
        name:"teamName",
        initialState:{
            value:"teams"
        },
        reducers:{
            addname:(state)=>{
                state.value+1

            },
            delname:(state)=>{
                state.value=+1
            }
        }

    }
)

export const {addname,delname}=TeamnameSlice.actions;
export default TeamnameSlice.reducer