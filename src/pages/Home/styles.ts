import styled from "@emotion/styled";
import { keyframes } from "@emotion/react"; 

const textGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  overflow: hidden;
`;

// Переливающийся текст
export const StyledText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  background: linear-gradient(270deg, #ff00cc, #3333ff, #00ff99, #ffcc00);
  background-size: 400% 400%;
  color: transparent;
  background-clip: text;
  animation: ${textGradient} 5s ease infinite;
`;



