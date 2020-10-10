import React from 'react';
import {Field, reduxForm} from 'redux-form';

function MessageForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="name" component="input" type="text" placeholder="name"/>
      <br/>
      <Field name="subject" component="input" type="text" placeholder="subject"/>
      <br/>
      <Field name="gender" component="select">
        <option></option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Field>
      <br/>
      <Field name="textarea" component="textarea" placeholder="textarea"/>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
}

const MessageReduxForm = reduxForm({
  form: 'message',
})(MessageForm)

function MessageReduxFormWrap() {
  function onSubmit(formData) {
    console.log(formData);
  }

  return <MessageReduxForm onSubmit={ onSubmit }/>
}

export default MessageReduxFormWrap;
