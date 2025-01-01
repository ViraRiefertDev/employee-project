import { StyledNavLink } from './styles';
import { CustomNavLinkProps } from './types';

function CustomNavLink({ linkName }: CustomNavLinkProps) {
  const linkTitle = linkName
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const link = `/${
    linkTitle === 'Home' ? '' : linkName.toLowerCase().replace(/\s+/g, '')
  }`;

  return (
    <StyledNavLink
      to={link}
      style={({ isActive }) => ({
        textDecoration: isActive ? 'underline' : 'none',
        fontWeight: isActive ? '700' : '400',
      })}
    >
      {linkTitle}
    </StyledNavLink>
  );
}

export default CustomNavLink;
