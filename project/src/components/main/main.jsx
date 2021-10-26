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

  const addNewTask = (task) => {
    if (task.length > 0) {
      dispatch(addTask(task));
      clearInput(document.querySelector('input[name="new-task"]'));
    }
  }

  return (
    <main className="main-page">
      <section className="main-page__wrapper">
        <h1>ToDoList</h1>
        <div className="main-page__add-task">
          <label className="visually-hidden" forhtml="id-new-task">Добавить задачу</label>
          <input type="text" id="new-task" name="new-task" onChange={(evt) => evt.target.value}/>
          <button className="main-page__new-task-btn" onClick={() => addNewTask(document.querySelector('input[name="new-task"]').value)}></button>
          <button className="main-page__clear-task-btn" onClick={() => clearInput(document.querySelector('input[name="new-task"]'))}>Очистить</button>
        </div>
        <List tasksList={tasksList} />
      </section>
    </main>
  )
}

export default Main;
