import React, { Component } from 'react';
import styled from 'styled-components';
import { size, space } from '../../styles/theme';
import Header from '../../components/Header';
import ContentContainer from '../../components/ContentContainer';
import Card from '../Card/';

const Container = styled.div`
  display: grid;
  grid-template-rows: ${size.headerHeight} minmax(calc(100vh - ${size.headerHeight}), auto);
`;

const MainContainer = styled.main`
  padding: calc(${space.vert} * 4) 0;
`;
class Calendar extends Component {
  render() {
    return (
      <Container>
        <Header />
        <MainContainer>
          <ContentContainer>
            <Card movie={{
              date: '01',
              day: 'Monday of the Dead'
            }}/>
            <Card movie={{
              date: '02',
              day: 'True Story Tuesday'
            }}/>
            <Card movie={{
              date: '03',
              day: 'Wind-Up Wednesday'
            }}/>
          </ContentContainer>
        </MainContainer>
      </Container>
    );
  }
}

export default Calendar;
