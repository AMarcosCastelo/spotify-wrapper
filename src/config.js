export const API_URL = 'https://api.spotify.com/v1';

const API_TOKEN = 'BQDfQfAiJkYAsG3ZNJE2oHsxZulIMofEtf7aoMWzCUsW_1D-KmHtuBG0h_vt8tf2Jf2xBowycaFPyQkCUwNiCbCDkr1CFYfyimMm6xhSpqaSQfXkOZIpwTrPKgFhfvhnCrE-hK1SeAXeHunIAzQrOoQCRyqM21Gcul5hawCQE6K3A-QJgaOEfc2m4wRAybWd_YesNewQPIZ6mxSerBrEIJPEPZ8XkOfrSBZzHBiubrLLocEkmEw9C7r_eXtZalbBTFpl9NpBPX4';

export const header = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_TOKEN}`,
  },
  mode: 'cors',
};
