import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import { Firebase } from '../../api';

import Header from '../../components/Header';
import { movies } from '../../data/movies';
import MovieScreen from '../MovieScreen';
import JustWatch from 'justwatch-api';
import { SupportedProviders } from '../../utils';
const jw = new JustWatch();

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      inView: true,
      providers: []
    };

    Firebase.init();
  }

  componentDidMount() {
    Promise.resolve(jw.getProviders()).then(res => {
      const filtered = res.filter(item => {
        return SupportedProviders.includes(item.id);
      })
      this.setState({ providers: filtered });
    });

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
                  jwId={movie.jwId}
                  day={movie.day}
                  date={movie.date}
                  backdrop={this.detectInnerWidth() ? movie.backdropSM : movie.backdrop}
                  services={movie.services}
                  focus={movie.focus}
                  inView={this.state.inView}
                  providers={this.state.providers}
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
