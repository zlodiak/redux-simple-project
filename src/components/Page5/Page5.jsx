import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';

function Page5(props) {
  return (
    <div>
        <Button variant="contained" color="primary">
            Hello World
        </Button>
        <br/>
        <ButtonGroup disableElevation variant="contained" color="primary">
            <Button>One</Button>
            <Button>Two</Button>
        </ButtonGroup>      
        <br/>  
        <Checkbox color="primary" />
    </div>
  );
}

export default Page5;