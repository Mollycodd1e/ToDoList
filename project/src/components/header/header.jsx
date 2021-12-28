import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changePriority} from '../store/action';
import {getTasksList} from '../store/data/selectors';

function Header(props) {

  const {instruction, instructionHandler, hide, hideHandler} = props;

  const dispatch = useDispatch();

  const taskList = [...useSelector(getTasksList)];

  const sortItems = (arr) => {
    dispatch(changePriority(arr.slice().sort((x, y) => y.important - x.important).sort((x, y) => x.select - y.select)));
  }

  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li>
            <div className="main-nav__hide-wrapper">
            {hide === false ?
              <button onClick={() => {hide === false ? hideHandler(true) : hideHandler(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                <span className="visually-hidden">Hide</span>
              </button>
            :
              <button onClick={() => {hide === false ? hideHandler(true) : hideHandler(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <span className="visually-hidden">Hide</span>
              </button>
            }
            </div>
          </li>
          <li>
            <div className="main-nav__sort-wrapper">
              <button onClick={() => sortItems(taskList)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                <span className="visually-hidden">Sort</span>
              </button>
            </div>
          </li>
          <li>
            <div className="main-nav__faq-wrapper">
            {instruction === false ?
              <button onClick={() => {instruction === false ? instructionHandler(true) : instructionHandler(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span className="visually-hidden">Faq</span>
              </button>
            :
              <button onClick={() => {instruction === false ? instructionHandler(true) : instructionHandler(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span className="visually-hidden">ToDoList</span>
              </button>
            }
            </div>
          </li>
          <li>
            <div className="main-nav__login-wrapper">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                <span className="visually-hidden">Login</span>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
