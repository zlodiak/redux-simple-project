import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import store from '../../redux/store';
import { required, maxLength15 } from '../../Validation/index';

const renderField = typeEl => ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      { typeEl === 'textarea' && <textarea {...input} placeholder={label} type={type}></textarea> }
      { typeEl === 'input' && <input {...input} placeholder={label} type={type}/> }
      { typeEl === 'select' && <select><option></option><option value="Male">Male</option><option value="Female">Female</option></select> }
      
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

function MessageForm(props) {
  const { handleSubmit, reset, submitting } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <Field 
        name="name" 
        component={ renderField('input') } 
        type="text" 
        label="name"
        validate={[ required, maxLength15 ]}
      />
      <br/>
      <Field 
        name="subject" 
        component={ renderField('input') } 
        type="text" 
        label="subject"
        validate={[ required, maxLength15 ]}
      />
      <br/>
      <Field 
        name="gender" 
        component={ renderField('select') } 
        label="gender"
        validate={[ required ]}
      />
      <br/>
      <Field 
        name="text" 
        component={ renderField('textarea') } 
        placeholder="text" 
        validate={[ required, maxLength15 ]}
      />
      <br/>
      <button type="submit" disabled={ submitting }>Submit</button>
    </form>
  );
}

const MessageReduxForm = reduxForm({
  form: 'message',
})(MessageForm)

function MessageReduxFormWrap() {
  function onSubmit(formData) {
    store.dispatch(reset('message')); 
    console.log('submitted', formData);
  }

  return <MessageReduxForm onSubmit={ onSubmit }/>
}

export default MessageReduxFormWrap;
