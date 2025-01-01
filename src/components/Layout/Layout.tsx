import CustomNavLink from '../CustomNavLink/CustomNavLink';
import Logo from '../Logo/Logo';
import { Header, NavContainer, LayoutComponent, Main } from './styles';
import { LayoutProps } from './types';




function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <Logo />
        <NavContainer>
        </NavContainer>
      </Header>
        <Main>{children}</Main>
    </LayoutComponent>
  );
}

export default Layout;
