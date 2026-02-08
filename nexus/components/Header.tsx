'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  font-size: 14px;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.text};
`;

export default function Header() {
  const pathname = usePathname();

  return (
    <Wrapper>
      <Logo />

      <Nav>
        <NavLink href="/" $active={pathname === '/'}>
          Home
        </NavLink>
        <NavLink href="/browse" $active={pathname === '/browse'}>
          Browse
        </NavLink>
        <NavLink href="/watchlist" $active={pathname === '/watchlist'}>
          Watchlist
        </NavLink>
      </Nav>
    </Wrapper>
  );
}
