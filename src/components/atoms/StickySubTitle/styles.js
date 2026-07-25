import styled from "styled-components";

export const StickyTitle = styled.h2`
  position: sticky;
  top: 16px;
  z-index: 1;
  width: fit-content;
  padding: 6px 12px;
  margin-bottom: 4px;
  background: rgba(248, 250, 252, 0.88);
  border: 1px solid #ccfbf1;
  border-radius: 999px;
  color: #0f766e;
  font-size: 0.82rem !important;
  font-weight: 800;
  letter-spacing: 0.08em !important;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
`;
