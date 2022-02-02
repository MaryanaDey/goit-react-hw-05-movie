import { NavLink, Outlet } from 'react-router-dom';
import { Nav, NavList, NavListItem } from './Navigation.styled';

export default function Navigation() {
  return (
    <>
      <Nav>
        <NavList>
          <NavListItem>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#dc6300' : '#2a363b',
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Home
            </NavLink>
          </NavListItem>
        </NavList>
      </Nav>
    </>
  );
}
