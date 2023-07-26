'use client';

import Image from "next/image";
import { createGlobalStyle, styled } from "styled-components";
import fullPageHeightStyle from "~/utils/fullPageHeightStyle";

const colors = {
  twitter: '#1DA1F2',
}

const CHROMESTORE_LINK = "https://chrome.google.com/webstore/detail/bring-the-bird-back/khmjbodjaafnkbmfnjcokflbohbfdoek";

const LocalGlobalStyle = createGlobalStyle`
  body {
    background: black;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  ${fullPageHeightStyle}
  h1 {
    font-size: 2rem;
    line-height: 3rem;
    margin-bottom: 1rem;
    color: ${colors.twitter};
    text-transform: uppercase;
  }
  a {
    width: fit-content;
    &:hover {
      text-decoration: underline;
    }
  }
  video {
    border-radius: 20px;
    border: 3px solid ${colors.twitter};
    margin-bottom: 15px;
  }
  p {
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  margin: 2rem 0;
  padding: 10px 15px;
  background-color: ${colors.twitter};
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 15px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin-left: -2px;
    margin-right: 5px;
  }
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: rgba(29, 161, 242, 0.8);
    text-decoration: none !important;
  }  
`;

export default function BBBPage() {
  return (
    <Container>
      <LocalGlobalStyle />
      <h1>Bring the bird back!</h1>
      <p>{`Don't like this new 𝕏 thing on Twitter? Me neither.`}</p>
      <p>Ditch it & bring the bird logo back with this extension.</p>
      <Button as="a" href={ CHROMESTORE_LINK } target="_blank" rel="noopener noreferrer">
        <Image src="/chrome.ico" alt="icon" width={24} height={24} style={{marginRight: 5}} />
        <span>Get the extension</span>
      </Button>
      <video width="100%" controls autoPlay>
        <source src="/bbb.mp4" type="video/mp4" />
      </video>
      <a href="https://twitter.com/gwendall" target="_blank" rel="noopener noreferrer" style={{
        color: 'rgba(255, 255, 255, 0.6)',
        textTransform: 'uppercase',
        fontSize: '0.75rem',
      }}>
        <p>Made by Gwendall</p>
      </a>
      <a href="https://github.com/gwendall/bring-the-bird-back" target="_blank" rel="noopener noreferrer" style={{
        color: 'rgba(255, 255, 255, 0.6)',
        textTransform: 'uppercase',
        fontSize: '0.75rem',
      }}>
        <p>Source code</p>
      </a>
    </Container>
  );
}