import shortid from 'shortid';

export const getCardsFromList = 
({cards, searchString}, listId) =>
  cards.filter(card => card.listId == listId && new RegExp(searchString, 'i').test(card.title));

const reducerName = 'search';
const createActionName = name => `app/${reducerName}/${name}`;

export const SEARCH = createActionName('SEARCH');

export const createAction_search = payload => ({ payload, type: SEARCH });

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SEARCH:
      return [...state, { ...action.payload, id: shortid.generate()  }];
    default:
      return state;
  }
}