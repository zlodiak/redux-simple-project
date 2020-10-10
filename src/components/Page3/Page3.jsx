import React, { useState } from 'react';
import MessagesSmart from './Messages/MessagesSmart';

function Page1(props) {
  const textRef = React.createRef();
  const nameRef = React.createRef();
  const subjectRef = React.createRef();
  
  const [state, setState] = useState({
    text: '',
    name: '',
    subject: '',
  });

  function textareaSet() {
    const text = textRef.current.value.trim();
    const name = nameRef.current.value.trim();
    const subject = subjectRef.current.value.trim();

    if(!text || !name || !subject) { return; }

    props.setMessageCreator({
      text: text,
      name: name,
      subject: subject,
      date: new Date,
    });
    clearAll();
  }

  function changeMessage() {
    setState({
      ...state, 
      text: textRef.current.value,
      name: nameRef.current.value,
      subject: subjectRef.current.value,
    });
  }

  function clearAll() {
    textRef.current.value = '';
    nameRef.current.value = '';
    subjectRef.current.value = '';
    setState({ 
      ...state, 
      text: '',
      name: '',
      subject: '',
    });
  }

  return (
    <div>
      <input placeholder="name" ref={ nameRef } value={ state.name } onChange={ changeMessage }/>
      <br/>
      <input placeholder="subject" ref={ subjectRef } value={ state.subject } onChange={ changeMessage }/>
      <br/>
      <textarea 
        ref={ textRef }
        placeholder="text"
        value={ state.text }
        onChange={ changeMessage }>
      </textarea>
      <br/>
      <button onClick={ textareaSet }>send</button>
      <br/>
      <MessagesSmart/>
    </div>
  );
}

export default Page1;
