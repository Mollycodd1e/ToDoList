import React from 'react';

function Header(props) {

  const {instruction, instructionHandler} = props;

  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="main-nav__list">
          <li>
            <div className="main-nav__faq-wrapper">
              <a href="#" onClick={() => {instruction === false ? instructionHandler(true) : instructionHandler(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span className="visually-hidden">Faq</span>
              </a>
            </div>
          </li>
          <li>
            <div className="main-nav__login-wrapper">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>
                <span className="visually-hidden">Login</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
