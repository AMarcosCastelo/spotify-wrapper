"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumsTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = require("./config");

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAlbum = function getAlbum(id) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(id), _config.header).then(_utils["default"]);
};

exports.getAlbum = getAlbum;

var getAlbums = function getAlbums(ids) {
  return fetch("".concat(_config.API_URL, "/albums/?ids=").concat(ids), _config.header).then(_utils["default"]);
};

exports.getAlbums = getAlbums;

var getAlbumsTracks = function getAlbumsTracks(id) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(id, "/tracks"), _config.header).then(_utils["default"]);
};

exports.getAlbumsTracks = getAlbumsTracks;