import React from "react";
import { Row, Checkbox } from "antd";

import { ContainerCheckBox, TitleCheckBox } from "./styled";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export const DirectorioChecks = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <ContainerCheckBox>
          <TitleCheckBox>Organizaciones</TitleCheckBox>
          <Row
            justify="start"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "flex-start",
              marginBottom: "30px",
            }}>
            <Checkbox style={{ marginLeft: "8px" }} onChange={onChange}>
              Jóvenes.
            </Checkbox>

            <Checkbox onChange={onChange}>Todas.</Checkbox>
          </Row>
          <TitleCheckBox>Áreas</TitleCheckBox>
          <Row
            justify="start"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "flex-start",
            }}>
            <Checkbox style={{ marginLeft: "8px" }} onChange={onChange}>
              Medio Ambiente.
            </Checkbox>
            <Checkbox onChange={onChange}>Grupos Vulnerables.</Checkbox>
            <Checkbox onChange={onChange}>Educación</Checkbox>
            <Checkbox onChange={onChange}>Emprendimiento.</Checkbox>
            <Checkbox onChange={onChange}>Participación ciudadana.</Checkbox>
          </Row>
        </ContainerCheckBox>
      </Row>
    </>
  );
};
