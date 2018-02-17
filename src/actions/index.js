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
      comicRetrieved({
        comicNum,
        comicMetadata: response.data
      })
    ))
    .catch(() => dispatch(
      comicRetrieved({
        comicNum,
        comicMetadata: null
      })
    ));
};

export const comicRetrieved = ({ comicNum, comicMetadata }) => ({
  type: COMIC_RETRIEVED,
  comicNum: comicNum || comicMetadata.num,
  comicMetadata
});
