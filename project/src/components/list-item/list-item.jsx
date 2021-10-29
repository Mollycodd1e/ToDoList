import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {deleteTask} from '../store/action';
import {useDispatch} from 'react-redux';

function ListItem(props) {

  const hiddenButton = 'list__button--closed';

  const {task, index} = props;

  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);

  const deleteNewTask = (task, index) => {
    dispatch(deleteTask(task, index));
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

  const examineCheck = () => {
    check === true ? setCheck(false) : setCheck(true);
  }

  return (
    <li onMouseEnter={(evt) => showButton(evt.target)} onMouseLeave={(evt) => hideButton(evt.target)} onFocus={(evt) => showButton(evt.target)}>
      <div className="list__check-wrapper">
        <input className="visually-hidden" name={`check-task${index + 1}`} id={`check-task${index + 1}`} type="checkbox" onChange={() => examineCheck()} checked={check === false  ? false : true}/>
        <label forhtml={`check-task${index + 1}`} onClick={() => examineCheck()}><span>{index + 1}.</span>{task}</label>
      </div>
      <button className="list__button list__button--important list__button--closed" aria-label="Важная задача"></button>
      <button className="list__button list__button--edit list__button--closed" aria-label="Редактировать задачу"></button>
      <button className="list__button list__button--trash list__button--closed" aria-label="Удалить задачу" onClick={() => deleteNewTask(task, index)} onBlur={(evt) => hideButton(evt.target)}></button>
    </li>
  )
}

ListItem.propTypes = {
  task: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default ListItem;
