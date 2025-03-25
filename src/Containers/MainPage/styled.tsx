import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoadingOverlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  background: #dad9d6;
  z-index: 9999;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: opacity 1.2s ease-in-out;
`;
