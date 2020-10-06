import React from 'react';
import { ButtonProps } from 'components/button.config';

const Button: React.FC<ButtonProps> = ({
  onClickCallback,
  stateValue,
  isEnabled,
  imagePath,
  className,
  altText
}) => {
  
  return (
    <div className={className}>
      { isEnabled ? 
          <img src={imagePath.on} onClick={() => onClickCallback(stateValue)} alt={altText} /> 
        : <img src={imagePath.off} alt={altText} />
      }
    </div>
  );
}

export default Button;