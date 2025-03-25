import styled from "styled-components";
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
  z-index: 100;
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
`;

const MenuBar = () => {
  const { isNavOpen, setIsNavOpen } = useStore();

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <MenuWrapper>
      <CenteredLogo>
        <img src="/static/logo-ethos-collapsed.svg" alt="Ethos" />
      </CenteredLogo>
      <Register>Register</Register>
      <IconButton onClick={toggleMenu} aria-label="Toggle menu">
        <img src="/static/icon-menu.svg" alt="Menu Icon" />
      </IconButton>
    </MenuWrapper>
  );
};

export default MenuBar;
