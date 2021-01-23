import React from "react";
import banner from "../../images/banner_historia.png";
import bannermovil from "../../images/Historiareflekta.png";
import { ImgBanner, ContainerNone } from "./styled";

export const ReflektaBaner = () => {
  return (
    <>
      <ContainerNone display="inline" display2="none">
        <ImgBanner src={banner} alt="Banner" />
      </ContainerNone>
      <ContainerNone display="none" display2="inline">
        <ImgBanner src={bannermovil} alt="Banner" />
      </ContainerNone>
    </>
  );
};
