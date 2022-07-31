import { createAvatar } from '@dicebear/avatars';
import styled from 'styled-components';
import * as style from '@dicebear/avatars-bottts-sprites';

const AvatarCircle = (seed: string) => {
  return createAvatar(style, {
    dataUri: true,
    seed,
    radius: 50,
  });
};

export default function Avatar() {
  return (
    <>
      <AvatarWrapper>
        <img style={{ width: '32px' }} src={AvatarCircle('123')} alt="avatar" />
      </AvatarWrapper>
    </>
  );
}

const AvatarWrapper = styled.div`
  border-radius: 50%;
  background: #fff;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
