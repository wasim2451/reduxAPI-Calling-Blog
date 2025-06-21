import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
export const fetchData=createAsyncThunk('fetchData',async()=>{
    const res=await axios.get('https://dummyjson.com/posts');
    const data=res.data.posts;
    return data;
});

const blogReducer=createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        error:null
    },
    reducers:{
        addData:(state,action)=>{
            state.posts.push(action.payload);
        }
    }, // It takes two things state and actions
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading=false;
            state.posts=action.payload;
        })
        .addCase(fetchData.rejected,(state)=>{
            state.loading=false;
            state.error="Error encountered while fetching !"
        })
    }
});
export default blogReducer.reducer;
export const {addData}=blogReducer.actions;