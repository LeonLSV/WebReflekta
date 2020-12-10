import styled from "styled-components";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;500;600;700&display=swap');
</style>;

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
  width: 450px;
  margin: 0 auto;
  margin-top: 90px;
  text-align: center;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const ButtonTitle = styled.button`
  padding: 15px 30px;
  font-family: "Libre Franklin", sans-serif;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(90deg, #ff9085, #fb6fbb);
  border: none;
  color: white;
  margin-top: 20px;
`;
