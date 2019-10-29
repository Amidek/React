import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.scss';
import Container from '../Container/Container';
import Card from '../Card/Card';

class SearchResult extends React.Component {
    static propTypes = {
      cards: PropTypes.array,
      title: PropTypes.string.isRequired,
      searchString: PropTypes.string,
      changeSearchString: PropTypes.func,
    }
    state = {
      value: this.props.searchString || '',
    };

    handleOK(){
      this.props.changeSearchString(this.state.value);
    }

    render() {
      const {cards} = this.props;
      return (
        <Container className={styles.component}>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      );
    }
}

export default SearchResult;