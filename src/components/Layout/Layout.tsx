import { useState, createContext } from 'react';

import CustomNavLink from '../CustomNavLink/CustomNavLink';
import Logo from '../Logo/Logo';
import { Header, NavContainer, LayoutComponent, Main } from './styles';
import { LayoutProps, UserData, IUserDataContext } from './types';

export const UserDataContext = createContext<IUserDataContext>({
  data: [],
  onDataChange: () => {},
});

function Layout({ children }: LayoutProps) {
  const [usersData, setUsersData] = useState<UserData[]>([]);

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
          data: usersData,
          onDataChange: setUsersData,
        }}
      >
        <Main>{children}</Main>
      </UserDataContext.Provider>
    </LayoutComponent>
  );
}

export default Layout;
