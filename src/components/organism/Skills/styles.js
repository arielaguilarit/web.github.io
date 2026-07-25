import styled from "styled-components";

export const SkillGroups = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  article {
    padding: 22px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);
  }

  h3 {
    margin-bottom: 14px;
    color: #0f766e;
    font-size: 1rem;
    letter-spacing: -0.01em;
  }

  ul {
    display: grid;
    gap: 9px;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 16px;
    color: #475569;
    font-size: 0.9rem;
  }

  li::before {
    position: absolute;
    left: 0;
    color: #14b8a6;
    content: "•";
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
