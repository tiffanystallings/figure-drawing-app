import { combineReducers, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const imageSlice = createSlice({
    name: 'images',
    initialState: [],
    reducers: {
        addImage: (state, action) => {
            state.push(action.payload)
        },
        removeImage: (state, action) => {
            _.remove(state, img => img.id === action.payload.id);
            return state;
        },
        removeAllImages: () => []
    }
});

const sessionSlice = createSlice({
    name: 'sessionList',
    initialState: [],
    reducers: {
        addSession(state, action) {
            state.push({id: _.uniqueId(), ...action.payload})
            return state;
        },
        removeSession: (state, action) => {
            _.remove(state, session => session.id === action.payload.id);
            return state;
        },
        removeLast: (state, action) => {
            state.splice(_.findLastIndex(state, s => s.seconds === action.payload.seconds), 1);
            return state;
        },
        moveSession: (state, action) => {
            const [dragIdx, hoverIdx] = action.payload;
            let dragCard = state[dragIdx];
    
            state.splice(dragIdx, 1);
            state.splice(hoverIdx, 0, dragCard);

            return state;
        },
        removeAllSessions: () => []
    }
});

const sessionOptionsDefault = [
    { name: '30 seconds', unlimited: false, seconds: 30, value: 0 },
    { name: '1 minute', unlimited: false, seconds: 60, value: 0 },
    { name: '2 minutes', unlimited: false, seconds: 120, value: 0 },
    { name: '3 minutes', unlimited: false, seconds: 180, value: 0 },
    { name: '5 minutes', unlimited: false, seconds: 300, value: 0 },
    { name: '10 minutes', unlimited: false, seconds: 600, value: 0 },
    { name: '15 minutes', unlimited: false, seconds: 900, value: 0 },
    { name: '20 minutes', unlimited: false, seconds: 1200, value: 0 },
    { name: 'Unlimited', unlimited: true, seconds: 9999, value: 0 }
];

const sessionOptionsSlice = createSlice({
    name: 'sessionOptions',
    initialState: sessionOptionsDefault,
    reducers: {
        changeValue: (state, action) => {
            const [session, change] = action.payload;
            state[_.findIndex(state, option => option.seconds === session.seconds)].value += change;
            return state;
        },
        resetAll: (state) => {
            return _.map(state, option => ({...option, value: 0}));
        }
    }
})

export const {addImage, removeImage, removeAllImages} = imageSlice.actions;
export const {addSession, removeSession, removeLast, moveSession, removeAllSessions} = sessionSlice.actions;
export const {changeValue, resetAll} = sessionOptionsSlice.actions;

const rootReducer = combineReducers({
    images: imageSlice.reducer, 
    sessionList: sessionSlice.reducer,
    sessionOptions: sessionOptionsSlice.reducer
});

export default rootReducer;