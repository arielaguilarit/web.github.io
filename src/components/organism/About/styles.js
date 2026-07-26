import styled from "styled-components";

export const Hero = styled.div`
  display: grid;
  grid-template-columns: minmax(340px, .9fr) minmax(420px, 1.1fr);
  align-items: center;
  column-gap: clamp(32px, 5vw, 72px);
  row-gap: 28px;

  & > .section-eyebrow,
  & > h2 {
    grid-column: 1 / -1;
  }

  & > .section-eyebrow {
    margin-bottom: -18px;
  }

  h2 {
    max-width: 24ch;
    font-size: clamp(2.15rem, 4.2vw, 3.8rem) !important;
    line-height: 1.04;
  }

  .hero-lead { margin-bottom: 14px; color: #334155; font-size: 1.15rem; }
  img { width: 100%; height: auto; border-radius: 22px; box-shadow: 0 24px 54px rgba(15, 23, 42, .2); }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;

    & > .section-eyebrow,
    & > h2 {
      grid-column: auto;
    }
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;

  a {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    padding: 12px 18px;
    border: 2px solid #0f766e;
    border-radius: 10px;
    background: #0f766e;
    color: white !important;
    text-decoration: none;
  }
  .secondary { background: transparent; color: #0f766e !important; }
`;
