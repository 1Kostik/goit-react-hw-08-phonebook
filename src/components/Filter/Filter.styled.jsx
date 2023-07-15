import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
  text-shadow: 0px 8px 30px rgba(12, 4, 35, 0.1);
`;

export const Input = styled.input`
  padding: 5px 10px;
  width: 100%;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 30px rgba(12, 4, 35, 0.1);
`;
