import styled from "@emotion/styled";
import imgBg from '../../images/1674638192_top-fon-com-p-fon-dlya-prezentatsii-derevo-svetloe-137.jpg'
import { NavLink } from 'react-router-dom';
export const HomeContainer=styled.div`
@media(min-with:375px){
height:400px;
}
margin: 70px auto;
display: flex;
height:600px;
border-radius: 10px;
background-image: url(${imgBg});
box-shadow: 0px 0px 25px 10px rgba(255,255,255,1);
`;

export const Container = styled.div`
padding: 20px;   
    display: flex;
    flex-direction: column;   
    align-items: center;

`;
export const Author=styled.p`
   
color: #ffff;
font-size: 22px;
font-weight: 500;
`;
export const NavContainer=styled.div`
@media(min-with:400px){
    font-size:25px;
}
color: #ffff;
font-size: 30px;
font-weight: 500;
`;
export const Text=styled.p`
@media(min-with:400px){
    font-size:25px;
}
margin-top: 20px;
margin-bottom: 30px;
color: #ffff;
font-size: 30px;
font-weight: 500;
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
    color: #030000;
  }
`;