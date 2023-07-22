import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
border-radius:12px;
`;

export const UserEmail = styled.p`
  font-size: 24px;
  line-height: 1.2;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LogOutButton = styled.button`
display:flex;
align-items: center;
  font-size: 24px;
  line-height: 1.2;
  background: #ef0060;
  border: none;
  border-radius: 12px;
  outline: none;
  padding: 4px 12px;
  color: #ffffff;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    transform: scale(1.25)
  }
`;
export const Text=styled.p`
    color: #fff;
    font-size: 22px;
    font-weight: 500;
`;
export const Button=styled.button`
width:75px;
height:30px;
margin-right:10px;
border-radius: 5px;
:hover {
    border-color:#ffff;
    background-color:rgba(12, 4, 35, 0.1);
    color:#ffff;
    box-shadow: 0px 0px 10px 5px rgba(255,255,255,1);
  }
`;