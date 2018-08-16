import React from 'react';
import styled from 'styled-components';
import { colors, size, space } from '../../styles/theme';

const HeaderElement = styled.header`
  background: ${colors.black};
  height: ${size.headerHeight};
  padding: ${space.default};
`;

const Header = () => (
  <HeaderElement>
    header
  </HeaderElement>
);

export default Header;
