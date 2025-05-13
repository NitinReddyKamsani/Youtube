import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen : true,
        videos : null,
    },
    reducers : {
        toggleMenu : (state) =>{
            state.isMenuOpen  = !state.isMenuOpen
        },
        videoContainer : (state,action) =>{
            state.videos = action.payload;
        },
        closeMenu : (state) =>{
            state.isMenuOpen = false;
        }
        
    }
})

export const {toggleMenu,videoContainer,closeMenu} = appSlice.actions;

export default appSlice.reducer;