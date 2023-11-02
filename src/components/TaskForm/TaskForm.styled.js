import styled from 'styled-components';

export const FormTask = styled.form`
  display: flex;
  gap: 4px;
`;

export const InputForm = styled.input`
  flex-grow: 1;
  padding: 8px;
  font: inherit;

  &:focus {
    outline-color: #1976d2;
  }
`;
