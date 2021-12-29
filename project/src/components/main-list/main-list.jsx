import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import List from '../list/list.jsx';
import {addTask} from '../store/action.js';
import {getTasksList} from '../store/data/selectors.js';

function MainList(props) {

  const {hide} = props;

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

  const onInputEnter = () => {
    document.querySelector('.main-page__input-clear-btn').classList.remove('main-page__input-clear-btn--closed');
  }

  const onInputBlur = (evt) => {
    if (evt.target !== document.querySelector('.main-page__input-clear-btn')) {
      document.querySelector('.main-page__input-clear-btn').classList.add('main-page__input-clear-btn--closed');
    }
  }

  const onClearClick = () => {
    clearInput(document.querySelector('input[name="new-task"]'));
  }

  return (
    <section className="main-page__wrapper">
      <h1>ToDoList</h1>
      <div className="main-page__add-task">
        <div className="main-page__input-wrapper">
          <input name="new-task" type="text" id="new-task" onKeyDown={(evt) => onEnterPress(evt)}
          onFocus={(evt) => onInputEnter(evt)} onBlur={(evt) => onInputBlur(evt)}/>
          <label className="visually-hidden" htmlFor="new-task" aria-label="Добавить задачу">Добавить задачу</label>
          <button className="main-page__input-clear-btn main-page__input-clear-btn--closed" onMouseDown={(evt) => evt.preventDefault()}
          onClick={() => onClearClick()}>
            <span className="visually-hidden">
              Стереть
            </span>
          </button>
        </div>
        <button className="main-page__new-task-btn" aria-label="Кнопка добавления задачи"
        onClick={() => addNewTask(document.querySelector('input[name="new-task"]').value, false, false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </button>
        <button className="main-page__clear-task-btn" aria-label="Кнопка очистки поля ввода"
        onClick={() => clearInput(document.querySelector('input[name="new-task"]'))}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </button>
        </div>
      <List tasksList={tasksList} hide={hide}/>
    </section>
  )
}

export default MainList;
