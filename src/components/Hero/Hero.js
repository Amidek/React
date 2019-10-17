import ReactHtmlParser from 'react-html-parser';
import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <div className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.image}></img>
  </div>
);

Hero.propTypes = {
  titleText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Hero;
