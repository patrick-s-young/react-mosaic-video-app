import React from 'react';
import { ButtonI } from 'Components/MosaicSelector/MosaicSelector.config';

const Button: React.FC<ButtonI> = ({
  onClickCallback,
  stateValue,
  isEnabled,
  imagePath,
  className
}: ButtonI) => {
  
  return (
    <div className={className}>
      { isEnabled ? 
          <img src={imagePath.on} onClick={() => onClickCallback(stateValue)} alt={`Click for ${stateValue}-tile video mosaic`} /> 
        : <img src={imagePath.off} />
      }
    </div>
  );
}

export default Button;