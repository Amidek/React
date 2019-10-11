import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';

class Card extends React.Component {

  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
  }

  render() {
    return(
      <section className={styles.component}>
        
      </section>
    )
  }
}

export default Card;
