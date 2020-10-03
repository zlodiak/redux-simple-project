import React, { useState } from 'react';

function Page1(props) {
  let textareaRef = React.createRef();
  
  const [state, setState] = useState({
    presentText: '',
  });

  function textareaSet() {
    props.setAppTextCreator(textareaRef.current.value);
    textareaRef.current.value = '';
  }

  function textareaChange() {
    setState({...state, presentText: textareaRef.current.value})
  }

  return (
    <div>
        <textarea 
          ref={ textareaRef }
          onChange={ textareaChange }>
        </textarea>
        <button onClick={ textareaSet }>send</button>
        <div>present: { state.presentText }</div>
        <div>memorized: { props.text }</div>
    </div>
  );
}

export default Page1;
