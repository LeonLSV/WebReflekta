import styled from "styled-components";

export const GlobalNavbar = styled.nav`
  display: flex;
  color: white;
  width: 100%;
  margin-top: 20px;
`;

export const ContainerMenu = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
`;
export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 991px) {
    display: none;
  }
`;
export const LogoNavbar = styled.img`
  width: 300px;
  margin: 20px;
  @media (max-width: 515px) {
    width: 200px;
  }
`;
export const ButtonNavbar = styled.button`
  background: none;
  width: auto;
  height: 35px;
  border: none;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 19px;
  padding: 0 13px;
  margin: 0 7px;
  font-family: "Source Code Pro", monospace;
  font-style: italic;
  font-weight: bold;
  &:hover {
    background: white;
    color: black;
  }
`;
