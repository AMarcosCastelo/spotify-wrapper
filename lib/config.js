"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.header = exports.API_URL = void 0;
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var API_TOKEN = 'BQDfQfAiJkYAsG3ZNJE2oHsxZulIMofEtf7aoMWzCUsW_1D-KmHtuBG0h_vt8tf2Jf2xBowycaFPyQkCUwNiCbCDkr1CFYfyimMm6xhSpqaSQfXkOZIpwTrPKgFhfvhnCrE-hK1SeAXeHunIAzQrOoQCRyqM21Gcul5hawCQE6K3A-QJgaOEfc2m4wRAybWd_YesNewQPIZ6mxSerBrEIJPEPZ8XkOfrSBZzHBiubrLLocEkmEw9C7r_eXtZalbBTFpl9NpBPX4';
var header = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: "Bearer ".concat(API_TOKEN)
  },
  mode: 'cors'
};
exports.header = header;