import firebase from 'firebase/app';
import 'firebase/database';
import https from 'https';
import QueryString from 'querystring';

const keys = {
  tmdb: '84d2690223f00a8cc05141e0c91c56b8',
  fire: 'AIzaSyC8YvGL_rt62if5-PYmriFE5ydEjPaDVQU'
}

export const Firebase = {
  TrackClick(movie, type) {
    let data;
    firebase.database().ref(`${movie}`).once('value').then(res => {
      data = res.val();
      data[type] ? data[type]++ : data[type] = 1;

      firebase.database().ref(`${movie}`).set(data);
    });
  },

  init() {
    const config = {
      apiKey: keys.fire,
      authDomain: 'horror-calendar-2018.firebaseapp.com',
      databaseURL: 'https://horror-calendar-2018.firebaseio.com',
      projectId: 'horror-calendar-2018',
      storageBucket: 'horror-calendar-2018.appspot.com'
    };

    firebase.initializeApp(config);
    this.database = firebase.database();
  }
};

export const GetMovieDetails = id => {
  // eslint-disable-next-line no-undef
  return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${keys.tmdb}&append_to_response=releases,videos`)
    .then(data => data.json());
}

/* eslint-disable camelcase */
const API_DOMAIN = 'api.justwatch.com';
export class JustWatch {
  constructor(options) {
    this._options = Object.assign({locale: 'en_US'}, options);
  }

  request(method, endpoint, params) {
    return new Promise((resolve, reject) => {
      params = Object.assign({}, params);
      // build request data
      var reqData = {
        protocol: 'https:',
        hostname: API_DOMAIN,
        path: endpoint,
        method: method,
        headers: {}
      };
      var body = null;
      // add query string if necessary
      if (method === 'GET') {
        if (Object.keys(params) > 0) {
          reqData.path = reqData.path + '?' + QueryString.stringify(params);
        }
      } else {
        body = JSON.stringify(params);
        reqData.headers['Content-Type'] = 'application/json';
      }

      // send request
      const req = https.request(reqData, (res) => {
        // build response
        let buffers = [];
        res.on('data', (chunk) => {
          buffers.push(chunk);
        });

        res.on('end', () => {
          // check if response
          var output = null;
          try {
            output = Buffer.concat(buffers);
            output = output.toString();
            output = JSON.parse(output);
          } catch (error) {
            if (res.statusCode !== 200) {
              reject(new Error('request failed with status ' + res.statusCode + ': ' + res.statusMessage));
            } else {
              reject(error);
            }
            return;
          }

          if (output.error) {
            reject(new Error(output.error));
          } else {
            resolve(output);
          }
        });
      });

      // handle error
      req.on('error', (error) => {
        reject(error);
      });

      // send
      if (method !== 'GET' && body) {
        req.write(body);
      }
      req.end();
    });
  }

  getProviders() {
    var locale = encodeURIComponent(this._options.locale);
    return this.request('GET', '/providers/locale/' + locale);
  }

  getTitle(content_type, title_id) {
    title_id = encodeURIComponent(title_id);
    content_type = encodeURIComponent(content_type);
    var locale = encodeURIComponent(this._options.locale);
    return this.request('GET', '/titles/' + content_type + '/' + title_id + '/locale/' + locale);
  }
}