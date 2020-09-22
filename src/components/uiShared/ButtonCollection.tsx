import React from 'react';
import Button from 'Components/uiShared/Button';
import { ButtonCollectionI, ButtonConfigI } from 'Components/MosaicSelector/MosaicSelector.config';
import { v1 as uuid } from 'uuid';


const ButtonCollection = ({
  currentStateValue,
  buttonCollectionConfig,
  onClickCallback
}: ButtonCollectionI) => {
  return (
    <div className={buttonCollectionConfig.className}>
      { buttonCollectionConfig.buttonConfig.map((button: ButtonConfigI) =>
          <Button 
            onClickCallback={onClickCallback}
            stateValue={button.stateValue}
            isEnabled={button.stateValue !== currentStateValue}
            imagePath={button.imagePath}
            className={button.className}
            key={uuid()}
          />)
      }
    </div>
  );
}

export default ButtonCollection;