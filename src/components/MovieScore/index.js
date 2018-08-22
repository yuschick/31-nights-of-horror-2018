import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { ShowScore } from '../../utils/Animations';

const Container = styled.div`
  height: 50px;
  position: relative;
  width: 50px;
`;

const SVGContainer = styled.svg.attrs({
  height: '100%',
  viewBox: '0 0 36 36',
  width: '100%'
})``;

const TrackPath = styled.path.attrs({
  d: "M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
})`
  fill: none;
  stroke: ${colors.scoreTrack};
  stroke-width: 2.5;
`;

const ScorePath = styled.path.attrs({
  d: "M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831",
  strokeDasharray: '0, 100'
})`
  animation: ${props => ShowScore(props.score)} 1.5s .5s ease forwards;
  fill: none;
  stroke: ${props => props.score < 7 ? props.score < 5.7 ? colors.scoreBad : colors.scoreMid : colors.scoreHigh };
  stroke-width: 3;
  stroke-linecap: butt;
`;

const ScoreText = styled.span`
  display: block;
  font-size: .75rem;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(calc(-50% + 1px));
  width: 100%;
`;

class MovieScore extends Component {
  render() {
    return (
      <Container>
        <SVGContainer>
          <TrackPath />
          <ScorePath
            score={this.props.score}
          />
        </SVGContainer>
        <ScoreText>{this.props.score.toString().length === 1 ? `${this.props.score}0`: this.props.score}</ScoreText>
      </Container>
    );
  }
}

MovieScore.propTypes = {
  score: PropTypes.number.isRequired
};

export default MovieScore;