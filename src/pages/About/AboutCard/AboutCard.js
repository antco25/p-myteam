import { useState } from 'react';
import './AboutCard.scss';
import IconCross from '../images/icons/icon-cross.svg';
import IconClose from '../images/icons/icon-close.svg';
import { ReactComponent as IconTwitter } from '../../../components/images/socials/icon-twitter.svg';
import { ReactComponent as IconLinkedIn } from '../../../components/images/socials/icon-linkedin.svg';

function AboutCard(props) {
  const { avatar, name, title, quote } = props;
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`about-card${flipped ? ' flip' : ''}`}>
      <div className='wrapper'>
        <img className='avatar' src={avatar} alt='avatar' />
        <span className='name'>{name}</span>
        <span className='title'>{title}</span>
        <p className='quote'>{quote}</p>
        <div className='socials'>
          <ul>
            <li><a href='/#'><IconTwitter /></a></li>
            <li><a href='/#'><IconLinkedIn /></a></li>
          </ul>
        </div>
        <img className={`flip-button`} src={flipped? IconClose : IconCross} onClick={()=> setFlipped(!flipped)} alt='flip icon'/>
      </div>
    </div>
  )
}

export default AboutCard;