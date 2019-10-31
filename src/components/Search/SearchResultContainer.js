import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import { getCardsForSearch } from '../../redux/cardsRedux';
import createAction_addCard from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.id),
});
  
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
});
  
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResult);