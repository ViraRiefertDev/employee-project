import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Position } from './types';

interface InfoCardProps {
  itemPosition: Position;
}

const commonStylesButtons = css`
  position: absolute;
  top: 270px;
  transform: translateY(-50%);
  background: hsl(210, 22%, 49%);
  color: white;
  width: 2.7rem;
  height: 2.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 2rem;
  border-radius: 20%;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    background: hsl(21, 62%, 45%);
  }
`;

export const EmployeeCardContainer = styled.div`
  margin: 84px 84px 50px 84px;
  position: relative;
  width: 700px;
  height: 570px;
  overflow: hidden;
`;

export const InfoCard = styled.div<InfoCardProps>`
  position: absolute;
  top: 0;
  left: 8%;
  min-width: 590px;
  height: 100%;
  opacity: 0;
  padding: 60px;
  background-color: #fff;
  opacity: ${({ itemPosition }) =>
    itemPosition === Position.ACTIVE ? '1' : '0'};
  transform: ${({ itemPosition }) =>
    itemPosition === Position.ACTIVE
      ? 'translateX(0)'
      : itemPosition === Position.LAST
      ? 'translateX(-100%)'
      : 'translateX(100%)'};
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom:23px;
`;

export const ButtonWrapper = styled.div`
  margin-top:40px;
`;

export const Label = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #6f6f6f;
`;

export const Value = styled.p`
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  color: #1c1c1c;
`;

export const ButtonsContainer = styled.div`
`;

export const NextButton = styled.button`
  ${commonStylesButtons};
  right: 0;
`;

export const PrevButton = styled.button`
  ${commonStylesButtons};
  left: 0;
`;
