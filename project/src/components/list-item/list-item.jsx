import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {changeCheck, changeImportant, changeSort, changeTask, deleteTask} from '../store/action';
import {useDispatch} from 'react-redux';

function ListItem(props) {

  const hiddenButtons = 'list__button-wrapper--closed';
  const disableOpacity = 0.3;

  const {task, index, select, important, setId, currentId, hide} = props;

  const dispatch = useDispatch();

  const deleteNewTask = (task, index, select) => {
    dispatch(deleteTask(task, index, select));
  }

  const showButtons = (evt) => {
    const buttons = evt.closest('li').querySelector('.list__button-wrapper');
    buttons.classList.remove(hiddenButtons);
  }

  const getButtonsLength = () => {
    if (document.querySelector('.list__button-wrapper')) {
      return parseFloat(getComputedStyle(document.querySelector('.list__button-wrapper')).width);
    } else {
      return 0;
    }
  }

  const hideButtons = (evt) => {
    const buttons = evt.closest('li').querySelector('.list__button-wrapper');
    buttons.classList.add(hiddenButtons);
  }

  const setImportantClass = (evt) => {
    const inputWrapper = evt.closest('li').querySelector('div');
    inputWrapper.classList.contains('list__check-wrapper--important') ? inputWrapper.classList.remove('list__check-wrapper--important')
    : inputWrapper.classList.add('list__check-wrapper--important');
    dispatch(changeImportant(task, index, important));
  }

  const examineCheck = (evt) => {
    dispatch(changeCheck(task, index, select));
    evt.target.blur();
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

  const dragStartHandler = (e) => {
    setId(index);
  }

  const dragEndHandler = (e) => {
    e.target.style.background = 'white';
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = 'lightgrey';
  }

  const dropHandler = (e) => {
    e.preventDefault();
    e.target.style.background = 'white';
    dispatch(changeSort(currentId, index));
  }

  let x1 = null;
  let y1 = null;

  function handleTouchStart(evt) {

    x1 = evt.touches[0].clientX;
    y1 = evt.touches[0].clientY;

    const taskList = Array.from(document.querySelector('.main-page__list').querySelectorAll('li'))

    taskList.map((item) => {
      return (
        (item !== evt.target.closest('li')) ?
          (item.style='left:' + 0 + 'px',
          item.querySelector('.list__button-wrapper--closed').style="left:"+ window.innerWidth +"px") : ''
      );
    })
  }

  function handleTouchMove(evt) {

    if (!x1 || !y1) {
      return false;
    }

    let x2 = evt.touches[0].clientX;
    let y2 = evt.touches[0].clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (Math.abs(xDiff) < getButtonsLength()/2) {
        (xDiff < 0) ? evt.target.closest('li').style="left:"+ xDiff +"px" : evt.target.closest('li').style="left:"+ 0 +"px";
        (xDiff < 0) ? evt.target.closest('li').querySelector('.list__button-wrapper--closed').style="left:"+  (window.innerWidth + xDiff -20) + "px" : evt.target.closest('li').querySelector('.list__button-wrapper--closed').style="left:"+ window.innerWidth +"px";
      }
    }
  }

  const resetDiff = (evt) => {
    if ((parseFloat(getComputedStyle(evt.closest('li').querySelector('.list__button-wrapper--closed')).left) - window.innerWidth) < (- getButtonsLength()/2)) {
      evt.closest('li').style="left:"+ (-getButtonsLength()/2) +"px";
      evt.closest('div').style="padding-right:"+ 70 + "px";
      evt.closest('li').querySelector('.list__button-wrapper--closed').style="left:"+ (window.innerWidth - getButtonsLength()/2 - 20) +"px";
    } else {
      evt.closest('div').style="padding-right:"+ 0 + "px";
      evt.closest('li').style="left:"+ 0 +"px";
      evt.closest('li').querySelector('.list__button-wrapper--closed').style="left:"+ window.innerWidth +"px";
    }
  }

    return (
      <li style={((select === false)&&(hide === true)) ? {display: `none`} : {display: `block`}}
      onTouchMove={(evt) => handleTouchMove(evt)}
      onTouchStart={(evt)=> handleTouchStart(evt)} onTouchEnd={(evt) =>  resetDiff(evt.target)}
      onDragStart={(e) => dragStartHandler(e)} onDragLeave={(e) => dragEndHandler(e)} onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)} onDrop={(e) => dropHandler(e)} onMouseEnter={(evt) => (window.innerWidth > 1024) ? showButtons(evt.target) : ''}
      onMouseLeave={(evt) => (window.innerWidth > 1024) ?  hideButtons(evt.target) : ''}
      onFocus={(evt) => (window.innerWidth > 1024) ? showButtons(evt.target) : ''} draggable={true}>
        {(edit === false) ?
          <div className={`list__check-wrapper ${important === true ? '' : 'list__check-wrapper--important'}`}>
            <input className="visually-hidden" name={`check-task${index + 1}`} id={`check-task${index + 1}`} type="checkbox"
            onChange={(evt) => examineCheck(evt)} checked={select === false ? true : false}/>
            <label htmlFor={`check-task${index + 1}`}><span>{index + 1}.</span>{task}</label>
          </div> :
          <div className={`list__check-wrapper list__check-wrapper--edit ${important === true ? '' : 'list__check-wrapper--important'}`}>
            <input className="visually-hidden" name={`check-task${index + 1}`} id={`check-task${index + 1}`} type="checkbox"
            onChange={(evt) => examineCheck(evt)} checked={select === false ? true : false}/>
            <label htmlFor={`check-task${index + 1}`}><span>{index + 1}.</span></label>
            <div className={`list__input-edit-wrapper`}>
              <input type="text" name="edit-task" id="edit-task" onFocus={(evt) => setInputValue(evt)} autoFocus onBlur={(evt) => blurInput(evt)}
              onKeyDown={(evt) => blurOnEnterPress(evt)}></input>
              <label className="visually-hidden" htmlFor="edit-task">Редактирование задачи</label>
            </div>
          </div>
        }

        <div className="list__button-wrapper list__button-wrapper--closed" style={{left: ``}}>
          <button className="list__button list__button--important" aria-label="Важная задача"
          style ={select === false ? {opacity: disableOpacity} : {opacity: ''}}
          onClick={(evt) => setImportantClass(evt.target)} disabled={select === false ? true : false}></button>
          <button className={`list__button list__button--edit`} aria-label="Редактировать задачу"
          style ={select === false ? {opacity: disableOpacity} : {opacity: ''}} disabled={select === false ? true : false}
          onClick={(evt) => changeText(evt)}></button>
          <button className="list__button list__button--trash" aria-label="Удалить задачу"
          onClick={() => deleteNewTask(task, index, select)} onBlur={(evt) => hideButtons(evt.target)}></button>
        </div>
      </li>
    )
}

ListItem.propTypes = {
  task: PropTypes.string.isRequired,
  select: PropTypes.bool,
  index: PropTypes.number.isRequired,
  important: PropTypes.bool.isRequired
};

export default ListItem;
