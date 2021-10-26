import React from 'react';
import ListItem from '../list-item/list-item.jsx';
import PropTypes from 'prop-types';

function List(props) {

  const {tasksList} = props;

  return (
    <ul className="main-page__list list">
      {tasksList.map((task, index) =>
        <ListItem task={task} index={index} key={index}/>)
      }
    </ul>
  )
}

List.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default List;
