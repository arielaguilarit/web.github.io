import styled from "styled-components";

export const ContainerAccordion = styled.article`
  border-bottom: 1px solid #e2e8f0;
`;

export const HeaderAccordion = styled.button`
  width: 100%;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 14px;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 160ms ease;

  &:hover {
    background-color: #f0fdfa;
  }

  &:focus-visible {
    outline: 3px solid #99f6e4;
    outline-offset: 2px;
  }
`;

export const ContentAccordion = styled.main`
  max-height: ${({ $isActive, $height }) => ($isActive ? $height : "0px")};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  padding: ${({ $isActive }) => ($isActive ? "0 14px 20px" : "0 14px")};
  color: #475569;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.25s ease;

  ul {
    display: grid;
    gap: 7px;
    margin-top: 14px;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 16px;
  }

  li::before {
    position: absolute;
    left: 0;
    color: #14b8a6;
    content: "•";
  }
`;

export const TitleContainer = styled.div`
  flex: 1;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 2;
`;

export const ToggleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: 16px;
  border-radius: 50%;
  background: #ccfbf1;
  color: #0f766e;
  font-size: 1.2rem;
  font-weight: 700;
`;
