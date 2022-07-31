import { useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCheck, FaCopy } from 'react-icons/fa';

interface Props {
  code: string;
}

export default function CodeBox({ code }: Props) {
  const [copied, setCopied] = useState(false);
  const changeIcon = () => {
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <>
      <CodeWrapper>
        <Code>{code}</Code>
        {/* <CopyToClipboard text={props.code}
          onCopy={() => setCopied(true)}>
          <FaCopy />
        </CopyToClipboard> */}
        <CopyButton
          text={code}
          onCopy={() => {
            setCopied(true);
            changeIcon();
          }}
        >
          {copied ? <FaCheck /> : <FaCopy />}
        </CopyButton>
      </CodeWrapper>
    </>
  );
}

const CodeWrapper = styled.div`
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Code = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  width: 200px;
  white-space: nowrap;
  overflow: auto;
  font-size: 1.5rem;
  background: #f9f5eb;
  color: #1c3879;
  border: 1px solid #1c3879;
  border-radius: 4px 0 0 4px;
  margin: 8px 0;
  outline: none;
  height: 46px;
  box-sizing: border-box;
  transition: 0.3s;
  cursor: default;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ebebeb;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #6d6d6d;
  }

  :focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;

const CopyButton = styled(CopyToClipboard)`
  font-size: 1.5rem;
  padding: 10px;
  color: #1c3879;
  background: #f9f5eb;
  border-radius: 0 4px 4px 0;
  border: 1px solid #1c3879;
  border-left: none;
  box-shadow: 0 0 8px 0 #f9f5eb;
  cursor: pointer;
  transition: 0.3s;
  :focus,
  :active {
    background: #eae3d2;
    color: #607eaa;
  }
`;
