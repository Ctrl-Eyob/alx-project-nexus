import styled from 'styled-components';


const Pill = styled.button<{ active?: boolean }>`
padding: 8px 16px;
border-radius: 999px;
border: 1px solid ${({ theme }) => theme.colors.border};
background: ${({ active, theme }) =>
active ? theme.colors.primary : 'transparent'};
color: ${({ theme }) => theme.colors.text};
cursor: pointer;
`;


export function GenrePill({ label, active, onClick }: any) {
return (
<Pill active={active} onClick={onClick}>
{label}
</Pill>
);
}