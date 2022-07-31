import styled from 'styled-components';
import CodeBox from 'components/CodeBox';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';

export default function Home() {
  return (
    <HomeWrapper>
      <User>
        <Avatar />
        <h1>wobbly-shrek</h1>
      </User>
      <CodeBox code="111111112222222222222" />
      <ConnectWrapper>
        <span>
          Have the code? <Link to="/EnterCode">Enter Here</Link>
        </span>
      </ConnectWrapper>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h1 {
    font-size: 2rem;
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ConnectWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  span {
    a {
      color: #ffea11;
      font-weight: 700;
      text-decoration: underline wavy;
      transition: transform 0.3s;
      :hover {
        transform: scale(1.5);
      }
    }
  }
`;
