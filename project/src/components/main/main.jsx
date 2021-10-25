import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../list/list.jsx';
import { getTasksList } from '../store/data/selectors.js';

function Main() {

  const dispatch = useDispatch();

  const addNewTask = (task) => {
    dispatch(task);
  }

  const tasksList = useSelector(getTasksList);

  return (
    <main className="main-page">
      <section className="main-page__wrapper">
        <h1>ToDoList</h1>
        <div className="main-page__add-task">
          <label className="visually-hidden" forHTML="id-new-task" onClick={addNewTask}>Добавить задачу</label>
          <input type="text" id="new-task" />
          <button className="main-page__new-task-btn"></button>
          <button className="main-page__clear-task-btn">Очистить</button>
        </div>
        <List tasksList={tasksList}/>
      </section>
    </main>
  )
}

export default Main;
