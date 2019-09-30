import React from 'react';
import styles from './Hero.scss';

class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Things to do</h2>
        <img className={styles.image} src="https://images.pexels.com/photos/2230796/pexels-photo-2230796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
      </header>
    )
  }
}

export default Hero;
