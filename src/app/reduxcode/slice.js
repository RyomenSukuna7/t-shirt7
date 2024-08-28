import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:[]
}


const slice=createSlice({
    name:"infomation",
    initialState,
    reducers:{
        clickUser:(state,action)=>{
            
            const data={
                image:action.payload.image,
                nid:action.payload.nid
            }

            state.user.push(data);
        }
    }
})


export const {clickUser}=slice.actions;
export default slice.reducer;