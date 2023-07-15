import styled from '@emotion/styled';

export const Contacts = styled.ul`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const ContactsItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  background-color: rgb(207 241 255);
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
  background-color: rgb(207 241 255);
  :hover {
    background-color: rgb(13 172 242);
  }
`;
