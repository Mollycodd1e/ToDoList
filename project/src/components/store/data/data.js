import {createReducer} from '@reduxjs/toolkit';
import {addTask, changeCheck, changeImportant, changeSort, changeTask, deleteTask} from '../action';

const initialState = {
  tasksList: [],
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      console.log(state.tasksList)
      state.tasksList.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      state.tasksList = state.tasksList.filter((task, index) => ((task !== action.payload) && (index !== action.payload.index)));
    })
    .addCase(changeTask, (state, action) => {
      state.tasksList.map((task, index) => {
        if ((index === action.payload.index)) {
          task.task = action.payload.task;
        }
        return null;
      });
    })
    .addCase(changeImportant, (state, action) => {
      state.tasksList.map((task, index) => {
        if ((task.task === action.payload.task) && (index === action.payload.index)) {
          task.important = action.payload.important;
        }
        return null;
      });
    })
    .addCase(changeSort, (state, action) => {
      console.log(action.payload);
      for (let i = 0; i < state.tasksList.length; i++) {
        [state.tasksList[action.payload.indexOne], state.tasksList[action.payload.indexTwo]] = [state.tasksList[action.payload.indexTwo], state.tasksList[action.payload.indexOne]];
      }
    })
    .addCase(changeCheck, (state, action) => {
      state.tasksList.map((task, index) => {
        if ((task.task === action.payload.task) && (index === action.payload.index)) {
          task.select = action.payload.select;
        }
        return null;
      });
    });
});

export {data};
