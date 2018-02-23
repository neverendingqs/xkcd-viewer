import { combineReducers } from 'redux';

import comicMetadata from './comicMetadata';
import latestComicNum from './latestComicNum';

const rootReducer = combineReducers({
  comicMetadata,
  latestComicNum
});
export default rootReducer;
