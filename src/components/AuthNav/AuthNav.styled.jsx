import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const Nav = styled(NavLink)`
display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #ffff;

  &.active {
    font-size:20px;
    color: #030000;
  }

  :hover {
    transform: scale(1.1);
  }
`;
