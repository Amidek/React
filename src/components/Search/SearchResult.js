import React from 'react';
import styles from './SearchResult.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

class SearchResult extends React.Component {
static propTypes = {
  cards: PropTypes.string,
}
render() {
  const { cards } = this.props;
  console.log(this.props);
  return (
    <section className={styles.component}>
      {cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </section>
  );
}
}

export default SearchResult;
