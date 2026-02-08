import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      primary: string;
      text: string;
      textSecondary: string;
      border: string;
    };
    spacing: (factor: number) => string;
    radius: {
      sm: string;
      md: string;
      lg: string;
    };
    typography: {
      fontFamily: string;
      heading: string;
      body: string;
    };
  }
}
