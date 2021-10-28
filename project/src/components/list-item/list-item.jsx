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

  return (
    <li onMouseEnter={(evt) => showButton(evt.target)} onMouseLeave={(evt) => hideButton(evt.target)}>
      <div className="list__check-wrapper">
        <input className="visually-hidden" name="check-task" id="check-task" type="checkbox" checked={check === false  ? false : true}/>
        <label forhtml="check-task" onClick={() => {check === true ? setCheck(false) : setCheck(true)}}><span>{index + 1}.</span>{task}</label>
      </div>
      <button className="list__button list__button--edit list__button--closed" aria-label="Редактировать задачу"></button>
      <button className="list__button list__button--trash list__button--closed" aria-label="Удалить задачу" onClick={() => deleteNewTask(task, index)}></button>
    </li>
  )
}

ListItem.propTypes = {
  task: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default ListItem;
