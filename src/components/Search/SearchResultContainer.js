import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsForSearch } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResult);
