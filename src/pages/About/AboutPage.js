import './AboutPage.scss';
import AboutCard from './AboutCard/AboutCard';
import { clients } from './data/clients';
import { directors } from './data/directors';
import CallToAction from '../../components/CallToAction/CallToAction';
import { useEffect } from 'react';

function AboutPage() {

  useEffect(() => {
    document.title = "myteam - about"
  }, [])

  return (
    <div className="about-page">
      <div className='a-header'>
        <div className='section-wrap'>
          <h1>About</h1>
          <div>
            <hr />
            <p>We help companies build dynamic teams made up of top global talent.
              Using our network of passionate professionals we drive innovation
              and deliver incredible outcomes. Talented, diverse teams shape the
              best products and experiences. We’ll bring those teams to you.</p>
          </div>
        </div>
      </div>
      <div className='a-directors'>
        <div className='section-wrap'>
          <h2>Meet the directors</h2>
          <div className='d-wrap'>
            {
              directors.map((director, index) => {
                return <AboutCard key={index} avatar={director.avatar} name={director.name} title={director.title} quote={director.quote} />
              })
            }
          </div>
        </div>
      </div>
      <div className='a-clients'>
        <div className='section-wrap'>
          <h2>Some of our clients</h2>
          <div className='cl-wrap'>
            {
              clients.map((client, index) => { return <img key={index} src={client.logo} alt='client logo'/> })
            }
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}

export default AboutPage;