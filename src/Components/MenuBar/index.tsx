import styled from "styled-components";
import useStore from "../../store/useStore";
import { device } from "../../styles/breakpoints";

const MenuHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  padding: 3rem 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;

  @media ${device.tablet} {
    padding: 1.75rem 6vw;
  }

  @media ${device.mobile} {
    padding: 1.5rem 1.5rem;
  }
`;

const CenteredLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    height: 28px;
    width: auto;
  }
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

const Register = styled.a`
  font-family: "OwnersText";
  text-transform: uppercase;
  text-decoration: underline;
  padding-right: 2rem;
  cursor: pointer;

  @media ${device.tablet} {
    margin-right: auto;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const MenuBar = () => {
  const { isNavOpen, setIsNavOpen } = useStore();

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <MenuHeader>
      <CenteredLogo>
        <img src="/static/logo-ethos-collapsed.svg" alt="Ethos" />
      </CenteredLogo>
      <Register>Register</Register>
      <IconButton onClick={toggleMenu} aria-label="Toggle menu">
        <img src="/static/icon-menu.svg" alt="Menu Icon" />
      </IconButton>
    </MenuHeader>
  );
};

export default MenuBar;
