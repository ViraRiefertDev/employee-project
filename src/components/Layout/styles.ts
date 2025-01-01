import { css } from '@emotion/react';
import styled from '@emotion/styled';


const commonStylesLayoutMain = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const LayoutComponent = styled.div`
  ${commonStylesLayoutMain};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 96px 25px 81px;
  background-color: #faf9ff;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 56px;
  font-size:28px;
  line-height:36px;
`;

export const Main = styled.main`
  ${commonStylesLayoutMain};
  background-color: #112232;
`;

