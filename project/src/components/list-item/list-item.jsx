import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {changeCheck, changeImportant, changeTask, deleteTask} from '../store/action';
import {useDispatch} from 'react-redux';

function ListItem(props) {

  const hiddenButtons = 'list__button-wrapper--closed';
  const disableOpacity = 0.3;
  const enableOpacity = 1;

  const {task, index, select, important} = props;

  const dispatch = useDispatch();

  const deleteNewTask = (task, index, select) => {
    dispatch(deleteTask(task, index, select));
  }

  const showButton = (evt) => {
    const buttons = evt.closest('li').querySelector('.list__button-wrapper');
    buttons.classList.remove(hiddenButtons);
  }

  const hideButton = (evt) => {
    const buttons = evt.closest('li').querySelector('.list__button-wrapper');
    buttons.classList.add(hiddenButtons);
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

  const changeText = () => {
    setEdit(true);
  }

  const [edit, setEdit] = useState(false);

  const blurInput = (evt) => {
    setEdit(false);
    dispatch(changeTask(evt.target.value, index));
  }

  const setInputValue = (evt) => {
    evt.target.value = `${task}`;
  }

  const blurOnEnterPress = (evt) => {
    if (evt.keyCode === 13) {
      evt.target.blur();
    }
  }

  if (edit === false) {
    return (
      <li onMouseEnter={(evt) => showButton(evt.target)} onMouseLeave={(evt) => hideButton(evt.target)}
      onFocus={(evt) => showButton(evt.target)}>
        <div className={`list__check-wrapper ${important === true ? '' : 'list__check-wrapper--important'}`}>
          <input className="visually-hidden" name={`check-task${index + 1}`} id={`check-task${index + 1}`} type="checkbox"
          onChange={() => examineCheck()} checked={select === false ? true : false}/>
          <label forhtml={`check-task${index + 1}`} onClick={() => examineCheck()}><span>{index + 1}.</span>{task}</label>
        </div>
        <div className="list__button-wrapper">
          <button className="list__button list__button--important" aria-label="Важная задача"
          style ={select === false ? {opacity: disableOpacity} : {opacity: enableOpacity}}
          onClick={(evt) => setImportantClass(evt.target)} disabled={select === false ? true : false}></button>
          <button className={`list__button list__button--edit`} aria-label="Редактировать задачу"
          style ={select === false ? {opacity: disableOpacity} : {opacity: enableOpacity}} disabled={select === false ? true : false}
          onClick={(evt) => changeText(evt)}></button>
          <button className="list__button list__button--trash" aria-label="Удалить задачу"
          onClick={() => deleteNewTask(task, index, select)} onBlur={(evt) => hideButton(evt.target)}></button>
        </div>
      </li>
    )
  } else {
    return (
      <li onMouseEnter={(evt) => showButton(evt.target)} onMouseLeave={(evt) => hideButton(evt.target)}
      onFocus={(evt) => showButton(evt.target)}>
        <div className={`list__check-wrapper list__check-wrapper--edit ${important === true ? '' : 'list__check-wrapper--important'}`}>
          <input className="visually-hidden" name={`check-task${index + 1}`} id={`check-task${index + 1}`} type="checkbox"
          onChange={() => examineCheck()} checked={select === false ? true : false}/>
          <label forhtml={`check-task${index + 1}`} onClick={() => examineCheck()}><span>{index + 1}.</span></label>
          <div className={`list__input-edit-wrapper`}>
            <input type="text" name="edit-task" id="edit-task" onFocus={(evt) => setInputValue(evt)} autoFocus onBlur={(evt) => blurInput(evt)}
            onKeyDown={(evt) => blurOnEnterPress(evt)}></input>
            <label className="visually-hidden" forhtml="edit-task">Редактирование задачи</label>
          </div>
        </div>
        <div className="list__button-wrapper list__button-wrapper--closed">
          <button className="list__button list__button--important " aria-label="Важная задача"
          style ={select === false ? {opacity: disableOpacity} : {opacity: enableOpacity}}
          onClick={(evt) => setImportantClass(evt.target)} disabled={select === false ? true : false}></button>
          <button className={`list__button list__button--edit `} aria-label="Редактировать задачу"
          style ={select === false ? {opacity: disableOpacity} : {opacity: enableOpacity}} disabled={select === false ? true : false}
          onClick={(evt) => changeText(evt.target)}></button>
          <button className="list__button list__button--trash " aria-label="Удалить задачу"
          onClick={() => deleteNewTask(task, index, select)} onBlur={(evt) => hideButton(evt.target)}></button>
        </div>
      </li>
    )
  }
}

ListItem.propTypes = {
  task: PropTypes.string.isRequired,
  select: PropTypes.bool,
  index: PropTypes.number.isRequired,
  important: PropTypes.bool.isRequired
};

export default ListItem;
