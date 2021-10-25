import React from 'react';

function ListItem() {
  return (
    <li>
      <span>1.</span>
      <p>Сходить в туалет</p>
      <div className="list__check-wrapper">
        <label className="visually-hidden" forHTML="id-check-task">Выполненная задача</label>
        <input id="check-task" type="checkbox" />
      </div>
      <button className="list__delete-task">Удалить задачу</button>
    </li>
  )
}

export default ListItem;
