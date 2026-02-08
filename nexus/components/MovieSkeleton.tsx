import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const MovieSkeleton = styled.div`
  height: 450px;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    #2e2e4d 25%,
    #3a3a5e 37%,
    #2e2e4d 63%
  );
  background-size: 400px 100%;
  animation: ${shimmer} 1.4s infinite;
`;

export default MovieSkeleton;
