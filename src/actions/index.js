import axios from 'axios';

export const COMIC_RETRIEVED = 'COMIC_RETRIEVED';

export const comicRequest = comicNum => (dispatch, getState) => {
  const state = getState();
  if(comicNum && state.comicMetadata[comicNum]) {
    return Promise.resolve();
  }

  return axios
    .get(`https://xkcd-api.now.sh/${comicNum || ''}`)
    .then(response => {
      const comicMetadata = response.data;
      const comicNumActual = comicNum || comicMetadata.num;

      dispatch(
        comicRetrieved({
          comicNum: comicNumActual,
          comicMetadata
        })
      );
    })
    .catch(() => dispatch(
      comicRetrieved({
        comicNum,
        comicMetadata: null
      })
    ));
};

export const comicRetrieved = ({ comicNum, comicMetadata }) => ({
  type: COMIC_RETRIEVED,
  comicNum,
  comicMetadata
});
