import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import EnterCode from 'pages/EnterCode';
import Home from '../pages/Home';

export default function App() {
  return (
    <Router>
      <Background>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/EnterCode" element={<EnterCode />} />
          {/* <Route path="/room" element={<Room />} /> */}
        </Routes>
      </Background>
    </Router>
  );
}

const Background = styled.div`
  color: white;
  height: 100vh;
  background: linear-gradient(
    200.96deg,
    #fedc2a -29.09%,
    #dd5789 51.77%,
    #7a2c9e 129.35%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
