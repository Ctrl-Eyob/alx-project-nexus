'use client';

import styled from 'styled-components';

const Badge = styled.div`
  display: inline-flex;
  align-items: center;

  padding: 6px 14px;
  margin-bottom: 16px;

  background: ${({ theme }) => theme.colors.primary};
  color: #fff;

  font-size: 14px;
  font-weight: 600;

  border-radius: 999px; /* fully rounded */
  letter-spacing: 0.3px;
`;

export default function SectionBadge({
  title,
}: {
  title: string;
}) {
  return <Badge>{title}</Badge>;
}
