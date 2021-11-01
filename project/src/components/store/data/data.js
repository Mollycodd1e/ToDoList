import {createReducer} from '@reduxjs/toolkit';
import {addTask, changeCheck, changeImportant, deleteTask} from '../action';

const initialState = {
  tasksList: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasksList.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      state.tasksList = state.tasksList.filter((task, index) => ((task !== action.payload) && (index !== action.payload.index)));
    })
    .addCase(changeImportant, (state, action) => {
      state.tasksList.map((task, index) => {
        if ((task.task === action.payload.task) && (index === action.payload.index)) {
          task.important = action.payload.important;
        }
      });
    })
    .addCase(changeCheck, (state, action) => {
      state.tasksList.map((task, index) => {
        if ((task.task === action.payload.task) && (index === action.payload.index)) {
          task.select = action.payload.select;
        }
      });
    });
});

export {data};
