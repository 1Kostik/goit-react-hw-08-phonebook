import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav=styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #ffff;
  &.active {
  color: #030000;
  font-size:20px;
  :hover {
    transform: scale(1.1);
  }
}
`;