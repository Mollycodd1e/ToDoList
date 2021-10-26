import {createReducer} from '@reduxjs/toolkit';
import {addTask, deleteTask} from '../action';

const initialState = {
  tasksList: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasksList.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      state.tasksList = state.tasksList.filter((task) => task !== action.payload);
    });
});

export {data};
