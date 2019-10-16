import React from 'react';
import styles from './Button.scss';

const Button = ({variant = '', ...otherProps}) => (
  <button 
    {...otherProps} 
    className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
  />
);

Button.propTypes = {
  variant: Node,
};
export default Button;

