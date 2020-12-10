import styled from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,600;1,700;1,900&display=swap');
</style>;

export const GlobalNavbar = styled.nav`
  display: flex;
  color: white;
  width: 100%;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LogoNavbar = styled.img`
  width: 300px;
  margin: 20px;
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
  font-size: 20px;
  padding: 0 13px;
  margin: 0 17px;
  font-family: "Source Code Pro", monospace;
  font-style: italic;
  font-weight: bold;
  &:hover {
    background: white;
    color: black;
  }
`;
