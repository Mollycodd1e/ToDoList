import React from 'react';
import PropTypes from 'prop-types';
import {deleteTask} from '../store/action';
import { useDispatch } from 'react-redux';

function ListItem(props) {

  const {task, index} = props;

  const dispatch = useDispatch();

  const deleteNewTask = (task) => {
    dispatch(deleteTask(task));
  }

  return (
    <li>
      <span>{index + 1}.</span>
      <p>{task}</p>
      <div className="list__check-wrapper">
        <label className="visually-hidden" forhtml="id-check-task">Выполненная задача</label>
        <input id="check-task" type="checkbox" />
      </div>
      <button className="list__delete-task" onClick={() => deleteNewTask(task)}>Удалить задачу</button>
    </li>
  )
}

ListItem.propTypes = {
  task: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default ListItem;
