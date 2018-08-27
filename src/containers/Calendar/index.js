import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import { Firebase } from '../../api';

import Header from '../../components/Header';
import { movies } from '../../data/movies';
import MovieScreen from '../MovieScreen';

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      inView: true
    };

    Firebase.init();
  }

  componentDidMount() {
    window.addEventListener('focus', () => {
      this.setState({ inView: true });
    });

    window.addEventListener('blur', () => {
      this.setState({ inView: false });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('focus', () => {
      this.setState({ inView: true });
    });

    window.removeEventListener('blur', () => {
      this.setState({ inView: false });
    });
  }

  detectInnerWidth() {
    return window.innerWidth <= 750;
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          {movies.map(movie => {
            return (
              <LazyLoad
                key={movie.movieId}
                height='100vh'
                unmountIfInvisible={true}
              >
                <MovieScreen
                  id={movie.movieId}
                  day={movie.day}
                  date={movie.date}
                  backdrop={this.detectInnerWidth() ? movie.backdropSM : movie.backdrop}
                  services={movie.services}
                  focus={movie.focus}
                  inView={this.state.inView}
                />
              </LazyLoad>
            );
          })}
        </main>
      </div>
    );
  }
}

export default Calendar;
