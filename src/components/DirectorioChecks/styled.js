import styled from "styled-components";

export const ContainerCheckBox = styled.div`
  height: 350px;
  width: 210px;
  background: #dcdcdc;
  border-radius: 30px;
  display: ${(props) => props.display};

  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10px;
  font-family: "Baloo Thambi 2", cursive;
  font-weight: bold;
  @media (max-width: 991px) {
    display: ${(props) => props.display991};
    height: 300px;
    width: 300px;
    ${"" /* padding: 30px; */}
    margin: 40px 0;
  }
`;

export const TitleCheckBox = styled.h1`
  margin-bottom: 10px;
  font-family: "Baloo Thambi 2", cursive;
  font-weight: bold;
  margin-left: 10px;
  @media (max-width: 991px) {
    font-size: 15px;
    margin-top: 15px;
  }
`;
