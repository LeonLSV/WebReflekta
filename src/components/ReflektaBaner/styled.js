import styled from "styled-components";

export const ImgBanner = styled.img`
  width: 100%;
  margin-top: 110px;
`;

export const ContainerNone = styled.div`
  display: ${(props) => props.display};
  @media (max-width: 767px) {
    display: ${(props) => props.display2};
  }
`;
