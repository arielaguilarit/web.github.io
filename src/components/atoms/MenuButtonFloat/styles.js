import styled from "styled-components";

export const MenuButton = styled.button`
  border: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  background: #0f766e;
  position: fixed;
  right: 24px;
  bottom: 24px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(15, 118, 110, 0.28);
  transition: transform 160ms ease, background 160ms ease;
  z-index: 4;

  &:hover {
    background: #115e59;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 3px solid #99f6e4;
    outline-offset: 3px;
  }
`;

export const Menu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 24px;
  bottom: 92px;
  min-width: 176px;
  padding: 6px;
  background-color: white;
  border: 1px solid #e2e8f0;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.18);
  border-radius: 14px;
  overflow: hidden;
  z-index: 3;
`;

export const MenuItem = styled.a`
  padding: 10px 14px;
  border-radius: 9px;
  color: #334155;
  font-size: 0.92rem;
  font-weight: 650;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #f0fdfa;
    color: #0f766e;
  }
`;
