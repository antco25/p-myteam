import './AnimRoutes.scss';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, useLocation, Routes } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import AboutPage from '../../pages/About/AboutPage';
import ContactPage from '../../pages/Contact/ContactPage';

function AnimRoutes() {

  const key = useLocation().key;
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={key}
        classNames="fade"
        timeout={300}
        exit={false}
        appear={true}
      >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default AnimRoutes;
