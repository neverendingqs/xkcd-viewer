import { COMIC_RETRIEVED } from '../actions';

export default (state = 1, action) => {
  switch (action.type) {
    case COMIC_RETRIEVED:
      return action.comicNum > state
        ? action.comicNum
        : state;
    default:
      return state;
  }
};
