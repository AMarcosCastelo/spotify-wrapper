import API_URL from './config';
import toJSON from './utils';
import album from './album';
import search from './search';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
      mode: 'cors',
    };
    return fetch(url, headers).then(toJSON);
  }
}
