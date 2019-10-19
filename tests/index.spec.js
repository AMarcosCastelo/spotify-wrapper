/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('SpotifyWrapper Library', () => {
  it('shoul create an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'blabla',
    });

    expect(spotify.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapper({
      token: 'foo',
    });

    expect(spotify.token).to.be.equal('foo');
  });

  describe('request method', () => {
    let stubedFetch;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      stubedFetch.resolves({ json: () => ({ album: 'name' }) });
    });
    afterEach(() => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      const spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist;
    });
    it('should call fetch when request', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      spotify.request('url');

      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('should call fetch with right url passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      spotify.request('url');

      expect(stubedFetch).to.have.been.calledWith('url');
    });
    it('should call fetch with right headers passed', () => {
      const spotify = new SpotifyWrapper({
        token: 'foo',
      });

      const headers = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer foo',
        },
        mode: 'cors',
      };

      spotify.request('url');
      expect(stubedFetch).to.have.been.calledOnceWith('url', headers);
    });
  });
});
