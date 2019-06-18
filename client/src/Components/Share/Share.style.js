import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: auto;
  text-align: center;
  width: 320px;

  padding: 12px 12px 0 12px;
`;

const SpeechBubble = styled.p`
  position: relative;
  max-width: 30em;

  background-color: #fff;
  padding: 1.125em 1.5em;
  font-size: 1.25em;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1.5em; // offset should move with padding of parent
    border: 0.75rem solid transparent;
    border-top: none;
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;

export { Container, SpeechBubble };
