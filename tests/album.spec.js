/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbums, getAlbumsTracks } from '../src/album';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });
  afterEach(() => {
    stubedFetch.restore();
  });

  describe('Smoke tests', () => {
    it('Should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });
    it('Should gave getAlbums method', () => {
      expect(getAlbums).to.exist;
    });
    it('Should gave getAlbumTracks method', () => {
      expect(getAlbumsTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    // Verifica se o fetch ocorre
    it('Should call fetch method', () => {
      getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    // Verifica se o fetch ocorre com a url desejada
    it('Should call fetch with the correct URL', () => {
      getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

      getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
    });
    // Verifica se o dado é recebido
    it('Should return the correct data from Promise', () => {
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');

      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    // Verifica se o fetch ocorre
    it('Should call fetch method', () => {
      getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    // Verifica se o fetch ocorre com a url desejada
    it('Should call fetch with the correct URL', () => {
      getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');

      getAlbums(['4aawyAB9vmqN3uQ7FjRGTk', '4aawyAB9vmqN3uQ7FjRGTy']);
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTk,4aawyAB9vmqN3uQ7FjRGTy');
    });
    // Verifica se o dado é recebido
    it('Should return the correct data from Promise', () => {
      const album = getAlbums(['4aawyAB9vmqN3uQ7FjRGTk', '4aawyAB9vmqN3uQ7FjRGTy']);

      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbumsTracks', () => {
    // Verifica se o fetch ocorre
    it('Should call fetch method', () => {
      getAlbumsTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    // Verifica se o fetch ocorre com a url desejada
    it('Should call fetch with the correct URL', () => {
      getAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');

      getAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTk');
      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk/tracks');
    });
    // Verifica se o dado é recebido
    it('Should return the correct data from Promise', () => {
      const album = getAlbumsTracks('4aawyAB9vmqN3uQ7FjRGTk');

      album.then((data) => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });
});
