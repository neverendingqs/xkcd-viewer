import axios from 'axios';

export const COMIC_RETRIEVED = 'COMIC_RETRIEVED';

export const comicRequest = comicNum => (dispatch, getState) => {
  const { comicMetadata } = getState();
  if(comicNum && comicMetadata[comicNum]) {
    return Promise.resolve();
  }

  return axios
    .get(`https://xkcd.now.sh/${comicNum || ''}`)
    .then(response => dispatch(
      comicRetrieved(response.data)
    ));
};

export const comicRetrieved = comicMetadata => ({
  type: COMIC_RETRIEVED,
  comicMetadata
});
