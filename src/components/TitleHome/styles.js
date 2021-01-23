import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IlustracionImg = styled.img`
  width: 90%;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Title = styled.h2`
  color: white;
  font-family: "Baloo Thambi 2", cursive;
  margin: 0 auto;
  margin-top: ${(props) => props.top};
  text-align: center;
  line-height: 40px;
  font-size: ${(props) => props.size};
  font-weight: 800;
  letter-spacing: 3px;
  ${
    "" /* @media (max-width: 991px) {
    margin-top: 100px;
  }
  @media (max-width: 767px) {
    margin-top: 100px;
  } */
  }
`;

export const ButtonTitle = styled.button`
  width: 100%;
  height: 70px;
  font-family: "Baloo Thambi 2", cursive;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(90deg, #ff9085, #fb6fbb);
  border: none;
  color: white;
  margin-top: 20px;
  border-radius: 3px;
  cursor: pointer;
  ${"" /* @media (max-width: 515px) {
    width: 130px;
  } */}
`;
