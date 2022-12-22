import './AnimRoutes.scss';
import React, { useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, useLocation, Routes, Navigate } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import AboutPage from '../../pages/About/AboutPage';
import ContactPage from '../../pages/Contact/ContactPage';

function AnimRoutes() {
  const transitionRef = useRef(null);
  const key = useLocation().key;

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={key}
        classNames="fade"
        timeout={300}
        exit={false}
        appear={true}
        nodeRef={transitionRef}
        addEndListener={(done) => transitionRef.current?.addEventListener("transitionend", done, false)}
      >
        <div ref={transitionRef}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default AnimRoutes;
