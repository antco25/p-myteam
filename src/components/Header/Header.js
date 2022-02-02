import './Header.scss';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from '../images/logo.svg';
import IconHamburger from './icon-hamburger.svg';
import { ReactComponent as IconClose } from './icon-close.svg';
import { Link } from 'react-router-dom';


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const setMenuOpen = (isOpen) => {
        if (isOpen) {
            window.scroll({top:0});
            document.body.classList.add('scroll-lock');
        } else {
            document.body.classList.remove('scroll-lock');
        }
        setIsMenuOpen(isOpen);
    }
    useMediaQuery({ minWidth: 576 }, undefined, () => setMenuOpen(false))

    return (
        <div className="header">
            <div className='h-wrapper section-wrap'>
                <img className='h-logo' src={Logo} />
                <img className='h-hamburger' src={IconHamburger} onClick={() => setMenuOpen(true)} />
                <nav className={`h-nav${isMenuOpen ? ' h-nav-active' : ''}`}>
                    <div className='n-wrapper'>
                        <IconClose className='n-close' onClick={() => setMenuOpen(false)} />
                        <ul>
                            <li><Link to='/' onClick={() => setMenuOpen(false)}>home</Link></li>
                            <li><Link to='/about' onClick={() => setMenuOpen(false)}>about</Link></li>
                        </ul>
                        <Link to='/contact' className='primary-light' onClick={() => setMenuOpen(false)}>contact us</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
