import styled from '@emotion/styled';
export const Container = styled.form`
@media(min-width: 500px){
  max-width: 80%;
}
@media(min-width: 600px){
  max-width: 50%;
}
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;  
  max-width: 100%;
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
  background-color: #ffff;
  border-radius: 5px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  :hover {
    border-color:#ffff;
    background-color:rgba(12, 4, 35, 0.1);
    color:#ffff;
    box-shadow: 0px 0px 31px 10px rgba(255,255,255,1);
  }
`;
