import React, { useState } from 'react';

function Page1(props) {
  let textareaRef = React.createRef();
  const [state, setState] = useState({
    present: '',
    memorized: '',
  });

  function handleChange() {
    setState({...state, present: textareaRef.current.value})
  }

  function handleSet() {
    props.store.dispatch(props.setAppTextCreator(textareaRef.current.value));
    setState({...state, present: '', memorized: props.store.getState().appReducer.appText});
  }

  return (
    <div>
        <textarea 
          ref={textareaRef}
          value={state.present} 
          onChange={ handleChange }>
        </textarea>
        <button onClick={ handleSet }>send</button>
        <div>present: {state.present}</div>
        <div>memorized: {state.memorized}</div>
    </div>
  );
}

export default Page1;
