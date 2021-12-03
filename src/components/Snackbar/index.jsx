import React from 'react';
import { Card } from './styles';

const Snackbar = ({ open, setOpen } ) => {
  if(open.status)
    setTimeout(() => setOpen({ status: false, message: '', color: true }), 5000);

  return (
    <>
      {
        open.status? 
          <Card isColored={open.color} >
            { open.message }
          </Card> :
          null  
      }
    </>
  );
}

export default Snackbar;