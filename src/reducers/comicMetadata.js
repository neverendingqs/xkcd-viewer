import { COMIC_LOAD } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case COMIC_LOAD:
      return action.payload;
    default:
      return state;
  }
};
