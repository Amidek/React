import React from 'react';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';


class Column extends React.Component {

  static propTypes = {
    cards: PropTypes.Node,
    icon: PropTypes.Node,
    title: PropTypes.string.isRequired,
    column: PropTypes.array,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {cards, title, icon, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon} />
          <Icon name={icon} />
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
          <Creator
            text={settings.cardCreatorText}
            action={addCard} />
        </div>
      </section>
    );
  }
}

export default Column;
