import styled from "@emotion/styled";
import imgBg from '../../images/1674638192_top-fon-com-p-fon-dlya-prezentatsii-derevo-svetloe-137.jpg'

export const LoginContainer=styled.div`
 margin: 70px auto;
border-radius: 10px;
height:400px;
 background-image: url(${imgBg});
 box-shadow: 0px 0px 25px 10px rgba(255,255,255,1);
`;

export const Button=styled.button`
    width: 320px;
    height: 60px;
    border-radius: 10px;
    background-color: #ffff;
    color: #030000;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.1em;
`;