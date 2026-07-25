import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  color: #0f172a;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Aside = styled.aside`
  position: fixed;
  inset: 0 auto 0 0;
  width: 320px;
  background: linear-gradient(160deg, #0f766e 0%, #115e59 55%, #0f172a 100%);
  box-shadow: 12px 0 32px rgba(15, 23, 42, 0.12);
  z-index: 2;

  @media (max-width: 768px) {
  position: fixed;
    position: relative;
    width: 100%;
    min-height: auto;
  }
`;

export const Main = styled.section`
  margin-left: 320px;
  display: flex;
  flex-direction: column;

  & > section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    min-height: 70vh;
    padding: 88px clamp(24px, 7vw, 112px);
    scroll-margin-top: 16px;
  }

  & > section:nth-child(odd) {
    background-color: #f8fafc;
  }

  & > section:nth-child(even) {
    background-color: #ffffff;
  }

  h2 {
    color: #0f172a;
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: -0.04em;
  }

  p {
    color: #475569;
    max-width: 68ch;
  }

  strong {
    color: #0f766e;
  }

  a {
    color: #0f766e;
    font-weight: 700;
    text-underline-offset: 3px;
  }

  @media (max-width: 768px) {
    margin-left: 0;

    & > section {
      min-height: auto;
      padding: 56px 24px;
    }
  }
`;
