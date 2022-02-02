import './HomePage.scss';
import { services, stories } from './data';
import CallToAction from '../../components/CallToAction/CallToAction';
import { useEffect } from 'react';

function HomePage() {

  useEffect(() => {
    document.title = "myteam"
  }, [])

  return (
    <div className="home-page">
      <div className='h-header'>
        <div className='section-wrap'>
          <h1>Find the <br/>best <span>talent</span></h1>
          <p><hr />Finding the right people and building high performing teams can
            be hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.</p>
        </div>
      </div>
      <div className='h-service'>
        <div className='section-wrap'>
          <h2><hr />Build & manage distributed teams like no one else.</h2>
          <ul className='s-content'>
            {
              services.map((service, index) => {
                return (
                  <li key={index}>
                    <img src={service.icon} />
                    <div className='item-desc'>
                      <div className='title'>{service.title}</div>
                      <p>{service.content}</p>
                    </div>
                  </li>)
              })
            }
          </ul>
        </div>
      </div>
      <div className='h-stories'>
        <div className='section-wrap'>
          <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
          <div className='story-wrap'>
            {
              stories.map((story, index) => {
                return (
                  <div className='s-story' key={index}>
                    <div className='quote'>{story.quote}</div>
                    <span className='name'>{story.name}</span>
                    <span className='title'>{story.title}</span>
                    <img className='avatar' src={story.avatar} />
                  </div>)
              })
            }
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}

export default HomePage;