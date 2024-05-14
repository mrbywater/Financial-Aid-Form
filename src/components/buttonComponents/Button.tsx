import './Button.scss';
import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ButtonProps = {
  icon?: IconProp;
  text: string;
  isActive?: boolean;
  onClick: any;
};

const Button = (props: ButtonProps) => {
  const { icon, text, onClick, isActive } = props;

  return (
    <button
      className={`buttonsMainContainer ${isActive ? 'isActive' : ''}`}
      onClick={onClick}>
      {icon && (
        <div>
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      <div>{text}</div>
    </button>
  );
};

export default Button;
