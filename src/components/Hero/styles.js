import styled from "styled-components";

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  z-index: -1;
  @media (max-width: 767px) {
    display: none;
  }
`;
