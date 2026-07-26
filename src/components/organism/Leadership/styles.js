import styled from "styled-components";

export const Principles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  article {
    min-height: 170px;
    padding: 24px;
    background: #0f172a;
    border-radius: 16px;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.14);
  }

  h3 {
    margin-bottom: 12px;
    color: #99f6e4;
    font-size: 1.1rem;
    letter-spacing: -0.02em;
  }

  p {
    color: #cbd5e1 !important;
    font-size: 0.92rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    article {
      min-height: auto;
    }
  }
`;
