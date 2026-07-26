import styled from "styled-components";

export const DetailPage = styled.main`
  min-height: 100vh;
  background: #f8fafc;
  color: #0f172a;
`;

export const DetailHeader = styled.header`
  padding: 56px max(24px, calc((100vw - 1040px) / 2)) 72px;
  background: linear-gradient(160deg, #0f766e, #115e59 56%, #0f172a);
  color: white;

  .back, .eyebrow { color: #99f6e4; }
  .back { display: inline-block; margin-bottom: 48px; font-weight: 700; text-underline-offset: 4px; }
  .eyebrow { margin-bottom: 12px; font-size: .8rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
  h1 { max-width: 820px; font-size: clamp(2.5rem, 7vw, 5.5rem); line-height: .98; letter-spacing: -.055em; }
  p:last-child { max-width: 68ch; margin-top: 24px; color: #dbeafe; font-size: 1.1rem; }
`;

export const DetailContent = styled.div`
  width: min(1040px, calc(100% - 48px));
  margin: 0 auto;
  padding: 72px 0 96px;

  h2 { margin-bottom: 16px; font-size: clamp(1.8rem, 4vw, 2.8rem); letter-spacing: -.04em; }
  h3 { font-size: 1.2rem; }
  p, li { color: #475569; }
  a { color: #0f766e; font-weight: 750; text-underline-offset: 3px; }
`;

export const StoryGrid = styled.ol`
  display: grid;
  gap: 24px;
  list-style: none;
  counter-reset: stage;

  li {
    counter-increment: stage;
    position: relative;
    padding: 32px 32px 32px 88px;
    border: 1px solid #e2e8f0;
    border-radius: 18px;
    background: white;
    box-shadow: 0 8px 24px rgba(15, 23, 42, .06);
  }
  li::before {
    content: counter(stage, decimal-leading-zero);
    position: absolute;
    top: 32px;
    left: 28px;
    color: #0f766e;
    font-weight: 900;
  }
  .company { margin-bottom: 6px; color: #0f766e; font-size: .8rem; font-weight: 850; letter-spacing: .08em; text-transform: uppercase; }
  h2 { margin-bottom: 20px; font-size: clamp(1.45rem, 3vw, 2rem); }
  dl { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  dt { margin-bottom: 5px; color: #0f172a; font-weight: 800; }

  @media (max-width: 760px) {
    li { padding: 28px 24px; }
    li::before { position: static; display: block; margin-bottom: 12px; }
    dl { grid-template-columns: 1fr; }
  }
`;

export const CaseFigure = styled.figure`
  margin-bottom: 64px;
  img { display: block; width: 100%; height: auto; border-radius: 20px; box-shadow: 0 18px 44px rgba(15, 23, 42, .16); }
  figcaption { margin-top: 12px; color: #64748b; font-size: .9rem; }
`;

export const CaseSections = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  section { padding: 28px; border: 1px solid #e2e8f0; border-radius: 16px; background: white; }
  h2 { font-size: 1.35rem; }
  ul { display: grid; gap: 8px; padding-left: 20px; }
  .todo { border-color: #f59e0b; background: #fffbeb; }
  @media (max-width: 720px) { grid-template-columns: 1fr; }
`;
