import styled from "@emotion/styled";
import imgBg from '../../images/1674638192_top-fon-com-p-fon-dlya-prezentatsii-derevo-svetloe-137.jpg'
import { NavLink } from "react-router-dom";
export const Header=styled.header`
height:60px;
 display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    border-bottom: 1px solid #2a363b;
    background-image: url(${imgBg});
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px 0px 25px 10px rgba(255,255,255,1);
`;
export const Nav=styled(NavLink)`
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
