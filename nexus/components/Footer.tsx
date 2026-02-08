'use client';

import styled from 'styled-components';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

const Wrapper = styled.footer`
  background: #20262e;
  padding: 80px 24px 40px;
  margin-top: 120px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.h1`
  font-size: 56px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ffffff;
`;

const Description = styled.p`
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.8;
  max-width: 720px;
`;

const Socials = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const Icon = styled.a`
  color: white;
  font-size: 28px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Content>
        <Brand>NEXUS</Brand>

        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam mattis quam id magna ultrices maximus. Fusce
          elementum fringilla orci, maximus tincidunt tortor
          efficitur id. Maecenas varius nibh libero, eget accumsan
          orci consectetur nec. Cras dui justo, accumsan et tempor
          eget, scelerisque at magna. Suspendisse convallis tempor
          orci, a lobortis tortor consequat lobortis. Nunc convallis
          velit et auctor euismod. Donec tellus nisi, accumsan in
          consequat ac, gravida vitae arcu.
        </Description>
      </Content>

      <Socials>
        <Icon href="#"><FaFacebookF /></Icon>
        <Icon href="#"><FaXTwitter /></Icon>
        <Icon href="#"><FaInstagram /></Icon>
        <Icon href="#"><FaLinkedinIn /></Icon>
      </Socials>
    </Wrapper>
  );
}
