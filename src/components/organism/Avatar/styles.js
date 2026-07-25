import styled from "styled-components";

export const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 48px 28px;
  gap: 18px;
  color: white;

  & > h1 {
    font-size: 2rem;
    letter-spacing: -0.04em;
  }

  & > p {
    text-align: center;
    color: rgba(255, 255, 255, 0.82);
  }

  .eyebrow {
    color: #99f6e4;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .availability {
    padding: 7px 11px;
    border: 1px solid rgba(153, 246, 228, 0.36);
    border-radius: 999px;
    color: #ccfbf1;
    font-size: 0.8rem;
  }
`;

export const Img = styled.img`
  width: 152px;
  height: 152px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.88);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.28);
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 8px;

  a {
    color: inherit;
    line-height: 0;
  }

  svg {
    cursor: pointer;
    transition: transform 160ms ease, color 160ms ease;
  }

  svg:hover {
    color: #99f6e4;
    transform: translateY(-2px);
  }
`;
