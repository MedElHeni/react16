import React from 'react';
import './UserOutput.css'

const useroutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.username} paragraph 1</p>
      <p>paragraph 2</p>
    </div>
  )
};

export default useroutput;

