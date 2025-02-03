import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { FaGithub } from 'react-icons/fa';

// 링크 컨테이너 스타일
const LinkContainer = styled.a`
  display: inline-flex;
  align-items: center;
  height: 2.4rem;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 6px;
  text-decoration: none;
  color: #ffffff;
  background-color: #1a1a1a;
  border: 1px solid #333333;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
    background-color: #222222;
  }
`;

// 아이콘 스타일
const iconStyle = css`
  font-size: 16px;
  color: #ffffff;
`;

// 텍스트 스타일
const Text = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: #ffffff;
`;

function Discussion() {
  const link =
    'https://github.com/JungHun98/boj-grammers-front/discussions/categories/q-a';
  return (
    <LinkContainer href={link} target="_blank" rel="noopener noreferrer">
      <FaGithub className={iconStyle} />
      <Text>문의</Text>
    </LinkContainer>
  );
}

export default Discussion;
