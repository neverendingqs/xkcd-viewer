import axios from 'axios';

export const COMIC_LOAD = 'COMIC_LOAD';

export const comicLoad = comicNum => ({
  type: COMIC_LOAD,
  payload: axios
    .get(`https://xkcd.now.sh/${comicNum || ''}`)
    .then(response => response.data)
});
