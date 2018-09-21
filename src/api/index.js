import firebase from 'firebase/app';
import 'firebase/database';

const keys = {
  tmdb: '84d2690223f00a8cc05141e0c91c56b8',
  fire: 'AIzaSyC8YvGL_rt62if5-PYmriFE5ydEjPaDVQU'
}

export const Firebase = {
  TrackClick(movie, type) {
    console.log(movie);
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