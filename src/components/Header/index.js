import React from 'react';
import styled from 'styled-components';
import ContentContainer from '../ContentContainer';
import Nav from '../Nav';
import SocialNav from '../SocialNav';
import { colors, size, space } from '../../styles/theme';

import Logo from '../../svg/logo.svg';

const HeaderContainer = styled.header`
  background: ${colors.black};
  height: ${size.headerHeight};
  padding: ${space.default};
  position: sticky;
  top: 0;
`;

const HeaderContent = styled(ContentContainer)`
  color: #fff;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const LogoImage = styled.img.attrs({
  src: `${Logo}`,
  alt: '31 Nights of Horror - 2018'
})`
  height: calc(${size.headerHeight} - calc(${space.default} * 2));
`;

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <LogoImage />
      <Nav />
      <SocialNav />
    </HeaderContent>
  </HeaderContainer>
);

export default Header;
