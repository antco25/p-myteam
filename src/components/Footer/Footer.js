import './Footer.scss';
import Logo from '../images/logo.svg';
import { ReactComponent as IconFacebook } from '../images/socials/icon-facebook.svg';
import { ReactComponent as IconPinterest } from '../images/socials/icon-pinterest.svg';
import { ReactComponent as IconTwitter } from '../images/socials/icon-twitter.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className='f-wrapper section-wrap'>
        <img src={Logo} className='f-logo' alt='myteam logo' />
        <div className='f-nav'>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
          </ul>
        </div>
        <div className='f-contact'>
          987  Hillcrest Lane<br />
          Irvine, CA<br />
          California 92714<br />
          Call Us : 949-833-7432<br />
        </div>
        <div className='f-socials'>
          <ul>
            <li><a href='https://www.facebook.com'><IconFacebook /></a></li>
            <li><a href='https://www.pinterest.com'><IconPinterest /></a></li>
            <li><a href='https://twitter.com'><IconTwitter /></a></li>
          </ul>
        </div>
        <div className='f-copyright'>Copyright 2021. All Rights Reserved</div>
      </div>
    </div>
  );
}

export default Footer;
