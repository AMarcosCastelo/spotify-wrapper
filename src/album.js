import { API_URL, header } from './config';
import toJSON from './utils';

export const getAlbum = (id) => (
  fetch(`${API_URL}/albums/${id}`, header).then(toJSON)
);

export const getAlbums = (ids) => (
  fetch(`${API_URL}/albums/?ids=${ids}`, header).then(toJSON)
);

export const getAlbumsTracks = (id) => (
  fetch(`${API_URL}/albums/${id}/tracks`, header).then(toJSON)
);
