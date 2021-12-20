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
      const swapElements = (tasksArray, i, j) => {
        //[tasksArray[i], tasksArray[j]] = [tasksArray[j], tasksArray[i]];
       // var lol = tasksArray[j];

        tasksArray.slice(i, 1, tasksArray[i])
        console.log(tasksArray[j])
        //console.log(tasksArray)
      }
      swapElements(state.tasksList, action.payload.indexOne, action.payload.indexTwo);
      console.log(state.tasksList)
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
