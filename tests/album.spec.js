/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  const spotify = new SpotifyWrapper({
    token: 'foo',
  });

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });
  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });
    it('Should gave getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });
    it('Should gave getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    // Verifica se o fetch ocorre
    it('Should call fetch method', () => {
      spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    // Verifica se o fetch ocorre com a url desejada
    it('Should call fetch with the correct URL', () => {
      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });
    // Verifica se o dado é recebido
    it('Should return the correct data from Promise', () => {
      const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    // Verifica se o fetch ocorre
    it('Should call fetch method', () => {
      spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    // Verifica se o fetch ocorre com a url desejada
    it('Should call fetch with the correct URL', () => {
      spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');

      spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTk', '4aawyAB9vmqN3uQ7FjRGTy']);
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTk,4aawyAB9vmqN3uQ7FjRGTy');
    });
    // Verifica se o dado é recebido
    it('Should return the correct data from Promise', () => {
      const album = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTk', '4aawyAB9vmqN3uQ7FjRGTy']);

      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getTracks', () => {
    // Verifica se o fetch ocorre
    it('Should call fetch method', () => {
      spotify.album.getTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    // Verifica se o fetch ocorre com a url desejada
    it('Should call fetch with the correct URL', () => {
      spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');

      spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk/tracks');
    });
    // Verifica se o dado é recebido
    it('Should return the correct data from Promise', () => {
      const album = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTk');

      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});
