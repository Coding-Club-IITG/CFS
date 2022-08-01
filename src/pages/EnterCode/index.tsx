import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function EnterCode() {
  const [clicked, setClicked] = useState(false);
  const [inputText, setInputText] = useState('');
  return (
    <>
      <InputWrapper>
        <CodeInput
          placeholder="Paste Code"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          disabled={clicked}
        />
        <SubmitButton
          onClick={() => setClicked(true)}
          disabled={inputText.length ? clicked : true}
        >
          {clicked ? (
            'Connecting...'
          ) : (
            <span>
              Connect
              <AiOutlineArrowRight />
            </span>
          )}
        </SubmitButton>
      </InputWrapper>
      <GoBack>
        <AiOutlineArrowLeft />
        <Link to="/">Go Back</Link>
      </GoBack>
    </>
  );
}

const InputWrapper = styled.div`
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const CodeInput = styled.input`
  width: 200px;
  height: 46px;
  border: 1px solid #ececec;
  border-radius: 4px;
  padding: 0 10px;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  background: #f9f5eb;
  color: #1c3879;
  transition: 0.3s;
  :focus:not([disabled]) {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  height: 46px;
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: #f9f5eb;
  transition: 0.2s;
  :hover:not([disabled]) {
    background: #ebebeb;
  }
  :active:not([disabled]) {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

const GoBack = styled.div`
  font-family: 'Rubik', sans-serif;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #ffea11;
  a {
    color: #ffea11;
    font-weight: 700;
    text-decoration: underline wavy;
    transition: transform 0.3s;
  }
`;
