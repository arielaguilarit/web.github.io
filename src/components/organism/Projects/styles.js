import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > :nth-child(odd) > div:first-child {
    order: 1;
  }

  @media (max-width: 640px) {
    & > :nth-child(odd) > div:first-child {
      order: initial;
    }
  }
`;
