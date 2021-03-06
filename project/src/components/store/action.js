import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_TASK: '/addTask',
  DELETE_TASK: '/deleteTask',
  CHANGE_CHECK: '/changeCheck',
  CHANGE_IMPORTANT: '/changeImportant',
  CHANGE_TASK: '/changeTask',
  CHANGE_SORT: '/changeSort',
  USE_SORT: '/useSort',
};

export const addTask = createAction(ActionType.ADD_TASK, (task, select, important) => ({
  payload:
    { task: task,
      select: select,
      important: important,
    },
}));

export const deleteTask = createAction(ActionType.DELETE_TASK, (task, index) => ({
  payload:
    { task: task,
      index: index,
    },
}));

export const changeSort = createAction(ActionType.CHANGE_SORT, (indexOne, indexTwo) => ({
  payload:
    { indexOne: indexOne,
      indexTwo: indexTwo,
    },
}));

export const changeCheck = createAction(ActionType.CHANGE_CHECK, (task, index, select) => ({
  payload:
    { task: task,
      select: select,
      index: index,
    },
}));

export const changePriority = createAction(ActionType.USE_SORT, (taskList) => ({
  payload: taskList,
}));

export const changeTask = createAction(ActionType.CHANGE_TASK, (task, index) => ({
  payload:
    { task: task,
      index: index,
    },
}));

export const changeImportant = createAction(ActionType.CHANGE_IMPORTANT, (task, index, important) => ({
  payload:
    { task: task,
      important: important,
      index: index,
    },
}));
