import './FormInput.scss';

function FormInput(props) {
  const { type, inputstate } = props;

  let formInput;
  if (type == 'textarea') {
    formInput = <textarea {...props} />
  } else {
    formInput = <input {...props} type={type} />
  }

  return (
    <div className={`form ${type} primary-1${inputstate ? " " + inputstate : ''}`}>
      {formInput}
    </div>
  );
}

export default FormInput;