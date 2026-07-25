import styled from "styled-components";

export const Card = styled.article`
  overflow: hidden;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  min-height: 224px;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  color: #0f172a;
  transition: transform 180ms ease, box-shadow 180ms ease;

  &:hover {
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.13);
    transform: translateY(-3px);
  }

  & > div:last-child {
    width: min(38%, 260px);
    min-height: 224px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    flex-direction: column-reverse;

    & > div:last-child {
      width: 100%;
      min-height: 190px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  padding: 28px;

  & > div > p {
    font-size: 14px;
    color: #64748b;
    margin-top: 8px;
  }

  h3 {
    font-size: 1.25rem;
    letter-spacing: -0.02em;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  span {
    padding: 6px 9px;
    border-radius: 6px;
    background: #f0fdfa;
    color: #0f766e;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
