"use strict";

var _search = require("./search");

var _album = require("./album");

module.exports = {
  search: _search.search,
  searchAlbuns: _search.searchAlbuns,
  searchTracks: _search.searchTracks,
  searchArtists: _search.searchArtists,
  searchPlaylists: _search.searchPlaylists,
  getAlbum: _album.getAlbum,
  getAlbums: _album.getAlbums,
  getAlbumsTracks: _album.getAlbumsTracks
};