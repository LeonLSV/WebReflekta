import styled from "styled-components";

export const BackgroundFooter = styled.div`
  background: linear-gradient(90deg, #2db9dd, #303ba2);
  width: 100%;
  height: 300px;
`;

export const FooterImg = styled.img`
  width: 100%;
  height: 370px;
  position: absolute;
  @media (max-width: 767px) {
    height: 500px;
  }
`;

export const ImgReflektaFooter = styled.img`
  width: 80%;
  @media (max-width: 767px) {
    display: none;
    width: 50%;
  }
`;
export const ImgReflektaFooterXS = styled.img`
  width: 50%;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 400px) {
    width: 70%;
  }
`;

export const TextFooterInvita = styled.h1`
  text-align: center;
  font-family: "Baloo Thambi 2", cursive;
  font-weight: bold;
  width: 80%;
  color: white;
  margin: 0 auto;
  line-height: 30px;
  @media (max-width: 767px) {
    font-size: 20px;
    margin: 15px 0;
    width: 100%;
    padding: 0 15px;
  }
`;
export const TextFooterLista = styled.h1`
  font-family: "Baloo Thambi 2", cursive;
  font-weight: bold;
  color: white;
  line-height: 30px;
  @media (max-width: 767px) {
    font-size: 20px;
    text-align: center;
    line-height: 17px;
  }
`;

export const ContainerTextFooterLista = styled.div`
  margin-left: 3rem;
  @media (max-width: 767px) {
    text-align: center;
    width: 100%;
    margin: 20px 0;
  }
`;
