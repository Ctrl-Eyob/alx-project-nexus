import styled from 'styled-components';
import Image from 'next/image';


const Wrapper = styled.div`
text-align: center;
`;


export function CastCard({ actor }: any) {
return (
<Wrapper>
<Image
src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
alt={actor.name}
width={120}
height={120}
style={{ borderRadius: '12px' }}
/>
<p>{actor.name}</p>
</Wrapper>
);
}