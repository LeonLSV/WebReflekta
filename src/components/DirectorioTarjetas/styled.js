import styled from "styled-components";

export const FondoTarjeta = styled.div`
  background: #dcdcdc;
  border-radius: 30px;
  padding: 15px 30px;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IMGTarjetaDirectorio = styled.img`
  width: 100%;
  padding-right: 10px;
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const TituloTarjetas = styled.h1`
  font-family: "Baloo Thambi 2", cursive;
  font-weight: bold;
  font-size: 30px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

export const ParrafoTarjetas = styled.p`
  line-height: 22px;
  font-family: "Baloo Thambi 2", cursive;
  font-weight: bold;
  font-size: ${(props) => props.sizee};
  margin: 5px 0;
  color: ${(props) => props.color};
  @media (max-width: 768px) {
    font-size: ${(props) => props.size376};
  }
`;

export const ContenedorIconos = styled.div`
  margin-left: 90px;
  @media (max-width: 768px) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

export const IconosTarjetas = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 2px;
  margin-right: 8px;
  cursor: pointer;
`;
