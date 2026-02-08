'use client';

import styled from 'styled-components';
import Image from 'next/image';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoBox = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 6px;
  background: linear-gradient(135deg, #6a5cff, #8f84ff);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.colors.text};
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoBox>
        {/* Replace with your SVG if you have one */}
        <Image
          src="/logo-icon.svg"
          alt="Nexus Logo"
          width={18}
          height={18}
        />
      </LogoBox>
      <LogoText>NEXUS</LogoText>
    </LogoWrapper>
  );
}
