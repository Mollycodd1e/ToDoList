import React, {useState} from 'react';
import ListItem from '../list-item/list-item.jsx';
import PropTypes from 'prop-types';

function List(props) {

  const {tasksList} = props;

  const [currentTaskId, setCurrentTaskId] = useState(null);

  return (
    <ul className="main-page__list list">
      {tasksList.map((task, index) =>
        <ListItem task={task.task} index={index} key={index} select={task.select === false} important={task.important === false}
        currentId={currentTaskId === null ? index : currentTaskId} setId={setCurrentTaskId}/>)
      }
    </ul>
  )
}

List.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default List;
