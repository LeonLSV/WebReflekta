import styled from "styled-components";

export const ImgBannerDirectorio = styled.img`
  width: 100%;
`;

export const ContainerNoneLayout = styled.div`
  display: ${(props) => props.display};
  @media (max-width: 991px) {
    display: ${(props) => props.display991};
  }
`;
