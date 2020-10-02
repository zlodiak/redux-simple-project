import React, { useState } from 'react';
import store from '../../redux/store';
import { setAppTextCreator } from '../../redux/appReducer';

function Page1() {
  let textareaRef = React.createRef();
  const [state, setState] = useState({
    present: '',
    memorized: '',
  });

  function handleChange() {
    setState({...state, present: textareaRef.current.value})
  }

  function handleSet() {
    store.dispatch(setAppTextCreator(textareaRef.current.value));
    setState({...state, present: '', memorized: store.getState().appReducer.appText});
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
