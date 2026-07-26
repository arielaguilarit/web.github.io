import styled from "styled-components";

export const CaseCard = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(280px, .9fr);
  align-items: center;
  gap: clamp(28px, 5vw, 64px);

  img { width: 100%; height: auto; border-radius: 18px; box-shadow: 0 18px 38px rgba(15, 23, 42, .18); }
  @media (max-width: 880px) { grid-template-columns: 1fr; }
`;
