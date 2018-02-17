import { COMIC_RETRIEVED } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case COMIC_RETRIEVED:
      return action.isLatest
        ? action.comicMetadata.num
        : state;
    default:
      return state;
  }
};
