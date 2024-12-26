import { createSlice } from '@reduxjs/toolkit';


export const TrendingSlice=createSlice({
    name:"Trending",
    initialState:{
        posts:[],
        topic:"india",
        call:false
    },
    reducers:{
        add:(state,action)=>{
            state.posts=action.payload;
        },

        changeTopic:(state,action)=>{
            state.topic=action.payload;
        },

        setApiCall:(state,action)=>{
            state.call=action.payload;
        }
    }
});

export const {add,changeTopic,setApiCall}=TrendingSlice.actions;
export default TrendingSlice.reducer;