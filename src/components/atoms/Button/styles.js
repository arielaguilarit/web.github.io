import styled from "styled-components";
export const ContainerButton = styled.button`
  border: 1px solid #0f766e;
  border-radius: 8px;
  padding: 9px 13px;
  background: #ffffff;
  color: #0f766e;
  font-weight: 700;
  cursor: pointer;
  transition: background 160ms ease, color 160ms ease, transform 160ms ease;

  &:hover {
    background-color: #0f766e;
    color: white;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 3px solid #99f6e4;
    outline-offset: 2px;
  }
`;
