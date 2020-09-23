import React from 'react';
import Button from 'Components/uiShared/Button';
import { ButtonCollectionProps, ButtonConfigI } from 'Components/uiShared/uiShared.config';
import { v1 as uuid } from 'uuid';


const ButtonCollection = ({
  currentStateValue,
  buttonCollectionConfig,
  onClickCallback
}: ButtonCollectionProps) => {
  return (
    <div className={buttonCollectionConfig.className}>
      { buttonCollectionConfig.buttonConfig.map((button: ButtonConfigI) =>
          <Button 
            onClickCallback={onClickCallback}
            stateValue={button.stateValue}
            isEnabled={button.stateValue !== currentStateValue}
            imagePath={button.imagePath}
            className={button.className}
            altText={button.altText}
            key={uuid()}
          />)
      }
    </div>
  );
}

export default ButtonCollection;