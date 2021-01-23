import styled from "styled-components";

export const ImgIconos = styled.img`
  width: 60px;
  margin-top: 30px;
`;

export const TituloIconos = styled.h2`
  font-family: "Baloo Thambi 2", cursive;
  font-weight: bold;
`;
export const TextoIconos = styled.p`
  text-align: center;
  margin-bottom: 30px;
  color: gray;
  font-weight: bold;
  font-family: "Baloo Thambi 2", cursive;
`;

export const BackgroundIconos = styled.div`
  background: red;
  display: flex;
`;

export const OcultarYno = styled.div`
  display: ${(props) => props.display};
  @media (max-width: 991px) {
    display: ${(props) => props.display2};
  }
`;

export const ImgIconosMovil = styled.img`
  width: 80%;
`;
