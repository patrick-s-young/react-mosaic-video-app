import React from 'react';

const Button = ({
  onClickTouch,
  name,
  action,
  style
}) => {
  
  return (
    <div>
      <button 
        style={style} 
        onClick={() => onClickTouch(action)}
      >
        {name}
      </button>
    </div>
  );
}

export default Button;