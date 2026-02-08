export const theme = {
colors: {
background: '#1A1A2E',
surface: '#22223B',
primary: '#FF8C00',
text: '#FFFFFF',
textSecondary: '#A0A0B2',
border: '#2E2E4D'
},
spacing: (factor: number) => `${factor * 8}px`,
radius: {
sm: '8px',
md: '12px',
lg: '20px'
},
typography: {
fontFamily: `'Inter', 'Roboto', sans-serif`,
heading: '600',
body: '400'
}
};