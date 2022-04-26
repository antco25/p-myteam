import { Link } from 'react-router-dom';
import './CallToAction.scss';
import { rootURL } from '../AnimRoutes/AnimRoutes';

function CallToAction() {

  return (
    <div className="call-to-action">
      <div className='cta-wrap'>
        <h2>Ready to get started?</h2>
        <Link to={`${rootURL}/contact`} className='primary-dark'>contact us</Link>
      </div>
    </div>
  );
}

export default CallToAction;
