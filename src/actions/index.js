import axios from 'axios';
import '../extensions/Storage';

export const COMIC_RETRIEVED = 'COMIC_RETRIEVED';

export const comicRequest = comicNum => (dispatch, getState) => {
  const state = getState();
  if(comicNum && state.comicMetadata[comicNum]) {
    return Promise.resolve();
  }

  const comicMetadataFromCache = sessionStorage.tryGetJsonItem(comicNum);
  if(comicMetadataFromCache) {
    dispatch(
      comicRetrieved({
        comicNum,
        comicMetadata: comicMetadataFromCache
      })
    );
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
      sessionStorage.setJsonItem(comicNumActual, comicMetadata);
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
