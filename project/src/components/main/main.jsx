import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import List from '../list/list.jsx';
import {addTask} from '../store/action.js';
import {getTasksList} from '../store/data/selectors.js';

function Main() {

  const dispatch = useDispatch();

  const tasksList = useSelector(getTasksList);

  const clearInput = (input) => {
    input.value = '';
  }

  const addNewTask = (task, select, important) => {
    if (task.length > 0) {
      dispatch(addTask(task, select, important));
      clearInput(document.querySelector('input[name="new-task"]'));
    }
  }

  const onEnterPress = (evt) => {
    if (evt.keyCode === 13) {
      addNewTask(document.querySelector('input[name="new-task"]').value, false, false);
    }
  }

  return (
    <main className="main-page">
      <section className="main-page__wrapper">
        <h1>ToDoList</h1>
        <div className="main-page__add-task">
          <input name="new-task" type="text" id="new-task" onKeyDown={(evt) => onEnterPress(evt)}/>
          <label className="visually-hidden" forhtml="new-task">Добавить задачу</label>
          <button className="main-page__new-task-btn"
          onClick={() => addNewTask(document.querySelector('input[name="new-task"]').value, false, false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </button>
          <button className="main-page__clear-task-btn"
          onClick={() => clearInput(document.querySelector('input[name="new-task"]'))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          </button>
        </div>
        <List tasksList={tasksList} />
      </section>
    </main>
  )
}

export default Main;
