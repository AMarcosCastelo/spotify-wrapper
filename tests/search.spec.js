/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  const spotify = new SpotifyWrapper({
    token: 'foo',
  });

  // Hooks
  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' }) });
  });

  afterEach(() => {
    fetchedStub.restore();
  });
  // Hooks end

  describe('Smoke Tests', () => {
    it('Should exist the spotify.search.albums method', () => {
      expect(spotify.search.albums).to.exist;
    });
    it('Should exist the spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    });
    it('Should exist the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });
    it('Should exist the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('spotify.search.artists', () => {
    it('Should call fetch function', () => {
      spotify.search.artists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.artists('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      spotify.search.artists('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('spotify.search.albums', () => {
    it('Should call fetch function', () => {
      spotify.search.albums('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.albums('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      spotify.search.albums('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('spotify.search.tracks', () => {
    it('Should call fetch function', () => {
      spotify.search.tracks('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.tracks('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      spotify.search.tracks('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('spotify.search.playlists', () => {
    it('Should call fetch function', () => {
      spotify.search.playlists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('Should call fetch with the correct URL', () => {
      spotify.search.playlists('Incubus');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      spotify.search.playlists('Muse');

      expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
