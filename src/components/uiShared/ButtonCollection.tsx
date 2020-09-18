import React from 'react';
import Button from 'Components/ClickTouch/Button/Button';
import { v1 as uuid } from 'uuid';

const ButtonCollection = ({
  buttonConfig,
  onClickTouch,
  style
}) => {
  return (
    <div style={style}>
      { buttonConfig.map((item) =>
          <Button 
            onClickTouch={onClickTouch}
            name={item.name}
            action={item.action}
            style={item.style}
            key={uuid()}
          />)
      }
    </div>
  );
}

export default ButtonCollection;