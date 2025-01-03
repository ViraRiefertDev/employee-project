import { useState, createContext } from 'react';

import CustomNavLink from '../CustomNavLink/CustomNavLink';
import Logo from '../Logo/Logo';
import { Header, NavContainer, LayoutComponent, Main } from './styles';
import { LayoutProps, UserData, IUserDataContext } from './types';

export const UserDataContext = createContext<IUserDataContext>({
  data: [],
  onSubmitChange: () => {},
});

function Layout({ children }: LayoutProps) {
  const [userData, setUserData] = useState<UserData[]>([]);

  return (
    <LayoutComponent>
      <Header>
        <Logo />
        <NavContainer>
          <CustomNavLink linkName='Create Employee' />
          <CustomNavLink linkName='Employees' />
        </NavContainer>
      </Header>
      <UserDataContext.Provider
        value={{
          data: userData,
          onSubmitChange: setUserData,
        }}
      >
        <Main>{children}</Main>
      </UserDataContext.Provider>
    </LayoutComponent>
  );
}

export default Layout;
