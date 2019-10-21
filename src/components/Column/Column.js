import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';


class Column extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    addCard: PropTypes.func,
  };

static defaultProps = {
  icon: settings.defaultColumnIcon,
};

render() {
  const {cards, title, icon, addCard} = this.props;
  return (
    <section className={styles.component}>        <h3 className={styles.title}>
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
