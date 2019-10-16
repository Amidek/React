import React from 'react';
//import {settings} from '../../data/dataStore';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
//import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';


class Column extends React.Component {
  static propTypes = {
    cards: Node,
    icon: Node,
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon} />
          <Icon name={this.props.icon} />
          {this.props.title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
        <Creator
          text={settings.cardCreatorText}
          action={title => this.addCard(title)}
        />
        */}
      </section>
    );
  }
}

export default Column;
