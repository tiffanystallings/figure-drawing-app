import { combineReducers, createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: 'images',
    initialState: [],
    reducers: {
        addImage(state, action) {
            state.push(action.payload)
        },
        removeImage(state, action) {
            state = state.filter((img) => img.id !== action.payload.id);
        }
    }
});

const sessionSlice = createSlice({
    name: 'sessionList',
    initialState: [],
    reducers: {
        addSession(state, action) {
            state.push(action.payload)
        },
        removeSession(state, action) {
            state = state.filter((session) => session.id !== action.payload.id);
        },
        moveSession(state, action) {
            const [dragIdx, hoverIdx] = action;
            let dragCard = state[dragIdx];
    
            state.splice(dragIdx, 1);
            state.splice(hoverIdx, 0, dragCard);
        }
    }
}) 

export const {addImage, removeImage} = imageSlice.actions;
export const {addSession, removeSession, moveSession} = sessionSlice.actions;

const rootReducer = combineReducers({
    images: imageSlice.reducer, 
    sessionList: sessionSlice.reducer
});

export default rootReducer;