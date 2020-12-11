import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IlustracionImg = styled.img`
  width: 90%;
`;

export const Title = styled.h2`
  color: white;
  font-family: "Baloo Thambi 2", cursive;
  width: 500px;
  margin: 0 auto;
  margin-top: ${(props) => props.top};
  text-align: center;
  line-height: 40px;
  font-size: ${(props) => props.size};
  font-weight: 800;
  letter-spacing: 3px;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const ButtonTitle = styled.button`
  width: 220px;
  height: 70px;
  font-family: "Baloo Thambi 2", cursive;
  font-size: 25px;
  font-weight: bold;
  background: linear-gradient(90deg, #ff9085, #fb6fbb);
  border: none;
  color: white;
  margin-top: 20px;
  border-radius: 3px;
`;
