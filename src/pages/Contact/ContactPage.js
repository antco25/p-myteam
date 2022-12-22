import './ContactPage.scss';
import { useEffect, useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import IconPerson from './icon-person.svg';
import IconCog from './icon-cog.svg';
import IconChart from './icon-chart.svg';

function ContactPage() {

  useEffect(() => {
    document.title = "myteam - contact"
  }, [])

  const [submitMessage, showSubmitMessage] = useState(false);

  const formData = {
    name: { label: 'name', placeholder: 'Name', type: 'text', value: useState(''), inputState: useState(null) },
    email: { label: 'email', placeholder: 'Email Address', type: 'email', value: useState(''), inputState: useState(null) },
    company: { label: 'company', placeholder: 'Company Name', type: 'text', value: useState(''), inputState: useState(null) },
    title: { label: 'title', placeholder: 'Title', type: 'text', value: useState(''), inputState: useState(null) },
    message: { label: 'message', placeholder: 'Message', type: 'textarea', value: useState(''), inputState: useState(null) },
  }


  const onFormInputChange = (event, setValue, setState) => {
    setState(event.target.value === "" ? null : 'active');
    setValue(event.target.value)
  }

  const handleSubmit = (e) => {
    let formDataValid = true;
    const validData = {};
    const setValues = [];
    const setInputStates = [];
    showSubmitMessage(false);

    Object.keys(formData).forEach((key) => {
      const [value, setValue] = formData[key]['value']
      const setInputState = formData[key]['inputState'][1]

      if (value === "") {
        setInputState('error');
        formDataValid = false;
      } else {
        validData[key] = value;
        setValues.push(setValue);
        setInputStates.push(setInputState);
      }
    })

    if (formDataValid) {
      //Submit data
      //console.log(validData);

      //Clear form
      setValues.forEach((setValue) => setValue(''));
      setInputStates.forEach((setInputState) => setInputState(null));
      showSubmitMessage(true);
      setTimeout(() => showSubmitMessage(false), 3000);
      
    }

    e.preventDefault();
  }

  return (
    <div className="contact-page">
      <div className='section-wrap'>
        <h1>Contact</h1>
        <div className='c-content'>
          <h2>Ask us about</h2>
          <ul>
            <li><img src={IconPerson} alt='person icon' className='icon-person' /><span>The quality of our talent network</span></li>
            <li><img src={IconCog} alt='cog icon' /><span>Usage & implementation of our software</span></li>
            <li><img src={IconChart} alt='chart icon'/><span>How we help drive innovation</span></li>
          </ul>
        </div>
        <form className='c-form' onSubmit={handleSubmit}>
          {
            Object.keys(formData).map((key) => {
              const data = formData[key]
              const [value, setValue] = formData[key]['value']
              const [inputState, setInputState] = formData[key]['inputState']

              return <FormInput
                key={key}
                name={data.label}
                aria-label={data.label}
                placeholder={data.placeholder}
                value={value}
                type={data.type}
                inputstate={inputState}
                onChange={(e) => onFormInputChange(e, setValue, setInputState)}
              />
            })
          }
          <div className={`form-submit${submitMessage ? ' message' : ''}`}><input className='secondary-light' type='submit' value='submit' /></div>
        </form>
      </div>

    </div>
  );
}

export default ContactPage;



/**
 *   const [formName, setFormName] = useState({ content: '', state: null });
  const [formEmail, setFormEmail] = useState({ content: '', state: null });
  const [formCompany, setFormCompany] = useState({ content: '', state: null });
  const [formTitle, setFormTitle] = useState({ content: '', state: null });
  const [formMessage, setFormMessage] = useState({ content: '', state: null });

    const onFormInputChange = (event, setData) => {
    const value = event.target.value;

    const state = value === "" ? null : 'active';
    const newData = { content: value, state: state }
    setData(newData)
  }


          <form className='c-form' onSubmit={handleSubmit}>
          <FormTextInput name='name' aria-label='name' placeholder='Name'
            inputstate={formName.state} onChange={(e) => onFormInputChange(e, setFormName)} />
          <FormTextInput name='email' aria-label='email' placeholder='Email Address'
            inputstate={formEmail.state} onChange={(e) => onFormInputChange(e, setFormEmail)} />
          <FormTextInput name='company' aria-label='company' placeholder='Company Name'
            inputstate={formCompany.state} onChange={(e) => onFormInputChange(e, setFormCompany)} />
          <FormTextInput name='title' aria-label='title' placeholder='Title'
            inputstate={formTitle.state} onChange={(e) => onFormInputChange(e, setFormTitle)} />
          <FormAreaInput name='message' aria-label='message' placeholder='Message'
            inputstate={formMessage.state} onChange={(e) => onFormInputChange(e, setFormMessage)} />
          <input className='secondary-light' type='submit' value='submit' />
        </form>

 */