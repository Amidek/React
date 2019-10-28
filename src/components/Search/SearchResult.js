import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.scss';
import Container from '../Container/Container';


class SearchResult extends React.Component {
    static propTypes = {
      cards: PropTypes.array,
      title: PropTypes.string.isRequired,
      searchString: PropTypes.string,
    }
    state = {
      value: this.props.searchString || '',
    };

    render() {
      //const { } = this.props;
      return (
        <Container className={styles.component}>
          <div className={styles.cards}>

          </div>
        </Container>
      );
    }
}

export default SearchResult;