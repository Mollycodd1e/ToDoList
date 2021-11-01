import React from 'react';
import PropTypes from 'prop-types';
import {changeCheck, changeImportant, deleteTask} from '../store/action';
import {useDispatch} from 'react-redux';

function ListItem(props) {

  const hiddenButton = 'list__button--closed';
  const disableOpacity = 0.3;
  const enableOpacity = 1;

  const {task, index, select, important} = props;

  const dispatch = useDispatch();

  const deleteNewTask = (task, index, select) => {
    dispatch(deleteTask(task, index, select));
  }

  const showButton = (evt) => {
    const buttons = evt.closest('li').querySelectorAll('button');
    buttons.forEach((element) => {
      if (element.classList.contains(hiddenButton)) {
        element.classList.remove(hiddenButton);
      }
    })
  }

  const hideButton = (evt) => {
    const buttons = evt.closest('li').querySelectorAll('button');
    buttons.forEach((element) => {
      if (!element.classList.contains(hiddenButton)) {
        element.classList.add(hiddenButton);
      }
    })
  }

  const setImportantClass = (evt) => {
    const inputWrapper = evt.closest('li').querySelector('div');
    inputWrapper.classList.contains('list__check-wrapper--important') ? inputWrapper.classList.remove('list__check-wrapper--important')
    : inputWrapper.classList.add('list__check-wrapper--important');
    dispatch(changeImportant(task, index, important));
  }

  const examineCheck = () => {
    dispatch(changeCheck(task, index, select));
  }

  const textChange = (evt) => {
    const dddd = evt.closest('li').querySelector('label');
    const span = dddd.querySelector('span').innerHTML
    console.log(dddd)
    dddd.outerHTML = `<input id="for-tv" value="${label}"></input>`;
    const dfdf = evt.closest('li').querySelector('input[id="for-tv"]');
    console.log(dfdf);
    dfdf.focus();
    dfdf.addEventListener('blur', function() {
      dfdf.outerHTML = `<label forhtml=${`check-task${index + 1}`} value="${dfdf.value}"></label>`;
    })
  }

  return (
    <li onMouseEnter={(evt) => showButton(evt.target)} onMouseLeave={(evt) => hideButton(evt.target)}
    onFocus={(evt) => showButton(evt.target)}>
      <div className={`list__check-wrapper ${important === true ? '' : 'list__check-wrapper--important'}`}>
        <input className="visually-hidden" name={`check-task${index + 1}`} id={`check-task${index + 1}`} type="checkbox"
        onChange={() => examineCheck()} checked={select === false ? true : false}/>
        <label forhtml={`check-task${index + 1}`} onClick={() => examineCheck()}><span>{index + 1}.</span>{task}</label>
      </div>
      <button className="list__button list__button--important list__button--closed" aria-label="Важная задача"
      style ={select === false ? {opacity: disableOpacity} : {opacity: enableOpacity}}
      onClick={(evt) => setImportantClass(evt.target)} disabled={select === false ? true : false}></button>
      <button className={`list__button list__button--edit list__button--closed`} aria-label="Редактировать задачу"
      style ={select === false ? {opacity: disableOpacity} : {opacity: enableOpacity}} disabled={select === false ? true : false}
      onClick={(evt) => textChange(evt.target)}></button>
      <button className="list__button list__button--trash list__button--closed" aria-label="Удалить задачу"
      onClick={() => deleteNewTask(task, index, select)} onBlur={(evt) => hideButton(evt.target)}></button>
    </li>
  )
}

ListItem.propTypes = {
  task: PropTypes.string.isRequired,
  select: PropTypes.bool,
  index: PropTypes.number.isRequired
};

export default ListItem;
