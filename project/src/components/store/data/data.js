import {createReducer} from '@reduxjs/toolkit';
import {addTask} from '../action';

const initialState = {
  tasksList: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasksList = action.payload;
    });
});

export {data};
