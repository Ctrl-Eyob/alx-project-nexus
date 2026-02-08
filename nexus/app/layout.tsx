'use client';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import Header from '@/components/Header';


export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body>
<StyledComponentsRegistry>
<ThemeProvider theme={theme}>
<Header />
{children}
</ThemeProvider>
</StyledComponentsRegistry>
</body>
</html>
);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
