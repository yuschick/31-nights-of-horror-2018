// import React, { Component } from 'react'; import styled, { keyframes } from
// 'styled-components'; import { colors, fonts, times, space } from
// '../../styles/theme'; import NetflixIcon from
// '../../images/services/netflix.jpg'; import ShudderIcon from
// '../../images/services/shudder.jpg'; import HuluIcon from
// '../../images/services/hulu.jpg'; import AmazonIcon from
// '../../images/services/amazon.jpg'; import YoutubeIcon from
// '../../images/services/youtube.jpg'; const FadeOut = keyframes`   to {
// background: rgba(0,0,0,.9);   } `; const FadeIn = keyframes`   to {
// background: rgba(0,0,0,.15);   } `; const Flash = keyframes`   0%, 49.9% {
//  background: rgba(0,0,0,.15);   }   50%, 100% {     background:
// rgba(0,0,0,1);   } `; const Cell = styled.div`   animation: ${FadeOut}
// ${times.base} ease infinite alternate;   background: rgba(0,0,0,.15);
// outline: 1rem solid ${colors.black};   ${props => props.hide && `
// animation: ${FadeIn} calc(${times.base} * 1.1) infinite alternate;
// background: rgba(0,0,0,1);   `}   ${props => props.flash && `     animation:
// ${Flash} ${times.base} infinite alternate;   `}   ${props => props.delayXs &&
// `     animation-delay: ${times.delayXs};   `}   ${props => props.delaySm && `
//     animation-delay: ${times.delaySm};   `}   ${props => props.delayMd && `
//   animation-delay: ${times.delayMd};   `}   ${props => props.delayLg && `
// animation-delay: ${times.delayLg};   `}   ${props => props.delayXl && `
// animation-delay: ${times.delayXl};   `}   ${props => props.noFade && `
// animation: none;   `}   ${props => props.slow && `     animation-duration:
// calc(${times.base} * 1.5);   `}   ${props => props.fast && `
// animation-duration: calc(${times.base} * .75);   `} `; const CellSpan2Col =
// styled(Cell)`   grid-column-end: span 2; `; const CellSpan3Col =
// styled(Cell)`   grid-column-end: span 3; `; const CellSpan4Col =
// styled(Cell)`   grid-column-end: span 4; `; const CellSpan2Row =
// styled(Cell)`   grid-row-end: span 2; `; const CellSpan3Row = styled(Cell)`
// grid-row-end: span 3; `; const CellSpan4Row = styled(Cell)`   grid-row-end:
// span 4; `; const CellCombo2Span = styled(Cell)`   grid-column-end: span 2;
// grid-row-end: span 2; `; const CellCombo3Span = styled(Cell)`
// grid-column-end: span 3;   grid-row-end: span 3; `; const CellCombo4Span =
// styled(Cell)`   grid-column-end: span 4;   grid-row-end: span 4; `; const
// CellCombo3Col2Row = styled(Cell)`   grid-column-end: span 3;   grid-row-end:
// span 2; `; const CellCombo4Col2Row = styled(Cell)`   grid-column-end: span 4;
//   grid-row-end: span 2; `; const CellCombo2Col3Row = styled(Cell)`
// grid-column-end: span 2;   grid-row-end: span 3; `; const CellCombo2Col4Row =
// styled(Cell)`   grid-column-end: span 2;   grid-row-end: span 4; `; const
// ContentContainer = styled.article`   background: ${colors.black};
// box-shadow: 0px 0px 25px 20px rgba(0,0,0,0.75);   color: #fff;   grid-area: 4
// / 8 / 8 / 15;   padding: ${space.vert} calc(${space.hori} * 2);   z-index: 2;
// `; const DateBox = styled(Cell)`   align-items: center;   background:
// ${colors.tertiary};   color: ${colors.white};   display: flex;   font:
// 1.25rem/1 ${fonts.raleway};   justify-content: center;   min-width: 40px; `;
// const DayBox = styled(CellSpan3Col)`   align-items: center;   background:
// ${colors.primary};   color: ${colors.white};   display: flex;   font:
// 1.25rem/1 ${fonts.raleway};   grid-column-end: span 3;   justify-content:
// center;   letter-spacing: 1.15px;   padding: ${space.default};
// text-transform: uppercase; `; const MovieTitle = styled.h2`   color:
// ${colors.white};   font: 2.75rem/1 ${fonts.oswald};
// -webkit-text-fill-color: ${colors.white};   -webkit-text-stroke: 1px
// ${colors.black};   text-shadow:        3px 3px 0 #000,      -1px -1px 0 #000,
//       1px -1px 0 #000,       -1px 1px 0 #000,        1px 1px 0 #000;
// text-transform: uppercase; `; const MovieTagLine = styled.h3`   color:
// ${colors.lightGrey};   font: 1.2rem/1.15 ${fonts.raleway};   padding:
// calc(${space.vert} / 2) 0; `; const MovieDetailsContainer = styled.div`
// position: relative; `; const MovieDetailsBar = styled.ul`   display: flex;
// margin: calc(${space.vert} * 1.5) 0; `; const MovieDetailsItem = styled.li`
// font: 1rem/1 ${fonts.raleway};   & + li {     padding-left: ${space.hori};
// } `; const MovieSummary = styled.p` letter-spacing: 1.2px;   margin:
// ${space.vert} 0; `; const ServicesContainer = styled.div`   display: flex;
// justify-content: space-between; `; const ServicesBar = styled.ul`   display:
// flex; `; const ServicesItem = styled.li`   & + li {     padding-left:
// ${space.hori};   }   & img {     height: 35px;     width: 35px;   } `; const
// UserScore = styled.div`   background: red;   height: 35px;   width: 35px; `;
// const CardContentContainer = styled.div`   display: flex;   flex-direction:
// column;   justify-content: space-between;   height: 100%; `; class Grid
// extends Component {   render() {     return ([       <Cell hide fast
// key='cell-1-1'></Cell>,       <CellCombo2Span
// key='cell-1-2'></CellCombo2Span>,       <CellSpan4Col noFade
// key='cell-1-4'></CellSpan4Col>,       <CellSpan4Col delayXl
// key='cell-1-8'></CellSpan4Col>,       <Cell hide delayXl
// key='cell-1-12'></Cell>,       <CellCombo2Span noFade
// key='cell-1-13'></CellCombo2Span>,       <CellSpan2Col noFade
// key='cell-1-15'></CellSpan2Col>,       <CellSpan2Row delayLg fast
// key='cell-2-1'></CellSpan2Row>,       <Cell hide delayLg
// key='cell-2-4'></Cell>,       <CellCombo2Span hide delaySm slow
// key='cell-2-5'></CellCombo2Span>,       <CellSpan3Col hide fast
// key='cell-2-7'></CellSpan3Col>,       <CellSpan3Col noFade
// key='cell-2-10'></CellSpan3Col>,       <Cell hide delayXl
// key='cell-2-15'></Cell>,       <CellSpan3Row noFade
// key='cell-2-16'></CellSpan3Row>,       <Cell hide noFade
// key='cell-3-2'></Cell>,       <CellSpan2Col slow
// key='cell-3-3'></CellSpan2Col>,       <Cell noFade key='cell-3-7'></Cell>,
//    <CellSpan3Col noFade key='cell-3-8'></CellSpan3Col>,       <DayBox noFade
// key='cell-3-12'>         <span>Monday of the Dead</span>       </DayBox>,
//   <DateBox noFade key='cell-3-15'>         <span>01</span>       </DateBox>,
//      <Cell noFade key='cell-3-16'></Cell>,       <ContentContainer
// key='content-1'>         <CardContentContainer>           <div>
// <MovieTitle>               Dawn of the Dead             </MovieTitle>
//     <MovieTagLine>               When there's no more room in hell, the dead
// will walk the earth.             </MovieTagLine>
// <MovieDetailsBar>               <MovieDetailsItem>1978</MovieDetailsItem>
//           <MovieDetailsItem>English</MovieDetailsItem>
// <MovieDetailsItem>NR</MovieDetailsItem>             </MovieDetailsBar>
//      <MovieSummary>               During an ever-growing epidemic of zombies
// that have risen from the dead, two Philadelphia SWAT team members, a traffic
// reporter, and his television-executive girlfriend seek refuge in a secluded
// shopping mall.             </MovieSummary>           </div>
// <MovieDetailsContainer>             <ServicesContainer>
// <ServicesBar>                 <ServicesItem>                   <img
// src={NetflixIcon} alt="Watch now on Netflix" />
// </ServicesItem>                 <ServicesItem>                   <img
// src={ShudderIcon} alt="Watch now on Shudder" />
// </ServicesItem>                 <ServicesItem>                   <img
// src={YoutubeIcon} alt="Watch now on Youtube" />
// </ServicesItem>                 <ServicesItem>                   <img
// src={HuluIcon} alt="Watch now on Hulu" />                 </ServicesItem>
//             <ServicesItem>                   <img src={AmazonIcon} alt="Watch
// now on Amazon" />                 </ServicesItem>
// </ServicesBar>                 <UserScore />             </ServicesContainer>
//           </MovieDetailsContainer>         </CardContentContainer>
// </ContentContainer>,       <CellCombo4Col2Row noFade
// key='cell-4-1'></CellCombo4Col2Row>,       <CellCombo3Span noFade
// key='cell-4-5'></CellCombo3Span>,       <Cell hide flash
// key='cell-5-16'></Cell>,       <CellSpan4Col hide delaySm
// key='cell-6-1'></CellSpan4Col>,       <CellSpan3Row delayXl
// key='cell-6-16'></CellSpan3Row>,       <CellCombo2Col3Row noFade
// key='cell-7-1'></CellCombo2Col3Row>,       <Cell flash slow
// key='cell-7-3'></Cell>,       <CellSpan2Row fast delayLg
// key='cell-7-4'></CellSpan2Row>,       <CellCombo3Col2Row noFade
// key='cell-7-5'></CellCombo3Col2Row>,       <CellSpan2Row noFade
// key='cell-8-3'></CellSpan2Row>,       <CellCombo4Col2Row noFade
// key='cell-8-8'></CellCombo4Col2Row>,       <CellSpan4Col fast delaySm
// key='cell-8-12'></CellSpan4Col>,       <Cell flash slow
// key='cell-8-16'></Cell>,       <CellSpan4Col key='cell-9-4'></CellSpan4Col>,
//      <Cell flash delayXl key='cell-9-12'></Cell>,       <CellSpan3Col noFade
// key='cell-9-13'></CellSpan3Col>,       <Cell noFade key='cell-9-16'></Cell>
//   ]);   } } export default Grid;