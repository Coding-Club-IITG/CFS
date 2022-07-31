import styled from 'styled-components';

export default function Input() {
  return (
    <>
      <InputBox type="text" placeholder="Enter Code" />
    </>
  );
}

const InputBox = styled.input`
  font-family: 'Rubik', sans-serif;
  width: 12rem;
  border: 2px solid #f9f5eb;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 1rem;
  box-sizing: border-box;
  transition: 0.3s;

  :focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;
