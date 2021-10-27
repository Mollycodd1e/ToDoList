import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_TASK: '/addTask',
  DELETE_TASK: '/deleteTask',
};

export const addTask = createAction(ActionType.ADD_TASK, (task) => ({
  payload: task,
}));

export const deleteTask = createAction(ActionType.DELETE_TASK, (task, index) => ({
  payload:
    { task: task,
      index: index,
    },
}));
