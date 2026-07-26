import styled from "styled-components";

export const PreviewGrid = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  list-style: none;

  li { padding: 18px; border-left: 3px solid #14b8a6; background: white; }
  span { display: block; margin-bottom: 7px; color: #0f766e; font-size: .76rem; font-weight: 850; letter-spacing: .05em; text-transform: uppercase; }
  strong { color: #334155 !important; font-size: .92rem; }
  @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`;
