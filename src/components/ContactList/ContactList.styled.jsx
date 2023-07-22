import styled from '@emotion/styled';

export const Contacts = styled.ul`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding:0;
`;

export const ContactsItem = styled.li`
@media(min-width: 500px){
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 30px;
  background-color:  #ffff;
  box-shadow: 0px 8px 30px rgba(12, 4, 35, 0.1);
  border-radius: 5px;;
   
  }


  padding: 10px;
  display: flex;
  align-items: center;  
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background-color:  #ffff;
  box-shadow: 0px 8px 30px rgba(12, 4, 35, 0.1);
  border-radius: 5px;
`;

export const Name = styled.span`
  text-align: left;
  font-size: 22px;
  flex-basis: 33.333%;
`;

export const Number = styled.span`
  text-align: right;
  font-weight: 500;
  font-size: 22px;
  flex-basis: 33.333%;
`;

export const Btn = styled.button`
  padding: 5px 15px;
  flex-basis: 15%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  box-shadow: 0px 8px 30px rgba(12, 4, 35, 0.1);
  cursor: pointer;
  transition: all 250ms ease-in-out;
  background-color: #ffff;
  :hover {
    border-color:#ffff;
    color:#fff;
    background-color: #000;
    box-shadow: 0px 0px 10px 3px rgba(0,0,0,1);
  }
`;
