import styled from '@emotion/styled';
export const Container = styled.form`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  max-width: 50%;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
`;

export const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  font-size: 24px;
  border: none;
  border-radius: 5px;
`;

export const Btn = styled.button`
  padding: 10px 25px;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
  background-color: rgb(207 241 255);
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    background-color: rgb(13 172 242);
  }
`;
