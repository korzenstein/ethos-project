import styled from "styled-components";
import Image from "next/image";
import useStore from "../../store/useStore";

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
  background: rgba(4, 28, 44, 0.9);
  backdrop-filter: blur(8px);
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 28px;
    height: 28px;
  }
`;

const MenuBar = () => {
  const { isNavOpen, setIsNavOpen } = useStore();

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <MenuWrapper>
      <IconButton onClick={toggleMenu} aria-label="Toggle menu">
        <img src="/static/icon-menu.svg" alt="Menu Icon" />
      </IconButton>
    </MenuWrapper>
  );
};

export default MenuBar;
