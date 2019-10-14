import React from 'react';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js'
class Column extends React.Component {

  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    columnTitle: PropTypes.node,
    title: PropTypes.node.isRequired,
  }

  addCart(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}>{this.props.Icon}</span>{this.props.columns}</h3>
        <div className={styles.component}>
          {this.state.cards.map(({key, ...cardsProps}) => (
          <Card key={key} {...cardsProps} />
        ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    )
  }
}

export default Column;
