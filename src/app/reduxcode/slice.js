const { createSlice,nanoid } = require("@reduxjs/toolkit");

export const initialState={
    user:[]
    
}

const checkProduct=createSlice({
    name:"first",
    initialState,
    reducers:{
        checkUser:(state,action)=>{
            const data={
                name:action.payload.images[action.payload.index],
                id:action.payload.nid
            };
            
            state.user.push(data);
 
        }
    }
    
})

export const {checkUser}=checkProduct.actions
export default checkProduct.reducer