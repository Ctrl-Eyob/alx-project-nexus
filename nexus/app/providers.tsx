'use client';

import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import { theme } from '@/styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
