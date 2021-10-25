import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_TASK: '/task',
};

export const addTask = createAction(ActionType.ADD_TASK, (task) => ({
  payload: task,
}));
