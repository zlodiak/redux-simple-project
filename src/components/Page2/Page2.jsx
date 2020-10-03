import React from 'react';

function Page2(props) {
  const appText = props.store.getState().appReducer.appText;
  let arr = [];
  if(appText) {
    arr = appText.split('').map(v => <div>{ v }</div>);
  }
  
  return (
    <div>
      <div>memorized: { appText }</div>
      <hr/>
      { arr }
      <hr/>
      { appText && appText.split('').map(v => <div>{ v }</div>) }
    </div>
  );
}

export default Page2;
