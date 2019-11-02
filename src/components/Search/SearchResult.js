import React from 'react';
import styles from './SearchResult.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

class SearchResult extends React.Component {

static propTypes = {
  cards: PropTypes.array,
};

render() {
  const { cards } = this.props;
  console.log(this.props);
  return (
    <section className={styles.component}>
      <div className={styles.cards}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </section>
  );
}
}

export default SearchResult;
