"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchAlbuns = exports.searchArtists = exports.search = void 0;

var _config = require("./config");

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var search = function search(query, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(query, "&type=").concat(type), _config.header).then(_utils["default"]);
};

exports.search = search;

var searchArtists = function searchArtists(query) {
  return search(query, 'artist');
};

exports.searchArtists = searchArtists;

var searchAlbuns = function searchAlbuns(query) {
  return search(query, 'album');
};

exports.searchAlbuns = searchAlbuns;

var searchTracks = function searchTracks(query) {
  return search(query, 'track');
};

exports.searchTracks = searchTracks;

var searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};

exports.searchPlaylists = searchPlaylists;