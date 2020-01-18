import ReactHtmlParser from 'react-html-parser';
import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';


class Hero extends React.Component {

  static propTypes = {
    titleText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  render() {
    const { titleText, image } = this.props;
    return(
      <div className={styles.component}>
        <h2 className={styles.title}>
          {ReactHtmlParser(titleText)}</h2>	
        <img className={styles.image} src={image}></img>
      </div>	 
    );
  }
}

export default Hero;
