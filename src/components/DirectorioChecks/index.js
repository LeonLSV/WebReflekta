import React from "react";
import { Row, Col, Checkbox } from "antd";

import { ContainerCheckBox, TitleCheckBox } from "./styled";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export const DirectorioChecks = () => {
  return (
    <>
      <Row justify="center" align="middle">
        <ContainerCheckBox display991="none" display="flex">
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
      {/* //cambio */}

      <Row>
        <Col>
          <ContainerCheckBox display="none" display991="flex">
            <Row>
              <Col md={12}>
                <TitleCheckBox>Áreas</TitleCheckBox>

                <Checkbox
                  style={{ marginLeft: "8px", fontSize: "12px" }}
                  onChange={onChange}>
                  Medio Ambiente.
                </Checkbox>
                <br />
                <Checkbox
                  style={{ marginLeft: "8px", fontSize: "11px" }}
                  onChange={onChange}>
                  Grupos Vulnerables.
                </Checkbox>
                <br />
                <Checkbox
                  style={{ marginLeft: "8px", fontSize: "12px" }}
                  onChange={onChange}>
                  Educación
                </Checkbox>
                <br />
                <Checkbox
                  style={{ marginLeft: "8px", fontSize: "12px" }}
                  onChange={onChange}>
                  Emprendimiento.
                </Checkbox>
                <Checkbox style={{ fontSize: "12px" }} onChange={onChange}>
                  Participación ciudadana.
                </Checkbox>
              </Col>
              <Col md={12}>
                <TitleCheckBox>Organizaciones</TitleCheckBox>
                <Checkbox
                  style={{ marginLeft: "8px", fontSize: "12px" }}
                  onChange={onChange}>
                  Jóvenes.
                </Checkbox>
                <br />
                <Checkbox
                  style={{ marginLeft: "8px", fontSize: "12px" }}
                  onChange={onChange}>
                  Todas.
                </Checkbox>
              </Col>
            </Row>
          </ContainerCheckBox>
        </Col>
      </Row>
    </>
  );
};

// export const DirectorioChecks = () => {
//   return (
//     <>
//       <Row justify="center" align="middle">
//         <ContainerCheckBox>
//           <TitleCheckBox>Organizaciones</TitleCheckBox>
//           <Row
//             justify="start"
//             style={{
//               display: "flex",
//               justifyContent: "flex-start",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               marginBottom: "30px",
//             }}>
//             <Checkbox style={{ marginLeft: "8px" }} onChange={onChange}>
//               Jóvenes.
//             </Checkbox>

//             <Checkbox onChange={onChange}>Todas.</Checkbox>
//           </Row>
//           <TitleCheckBox>Áreas</TitleCheckBox>
//           <Row
//             justify="start"
//             style={{
//               display: "flex",
//               justifyContent: "flex-start",
//               flexDirection: "column",
//               alignItems: "flex-start",
//             }}>
//             <Checkbox style={{ marginLeft: "8px" }} onChange={onChange}>
//               Medio Ambiente.
//             </Checkbox>
//             <Checkbox onChange={onChange}>Grupos Vulnerables.</Checkbox>
//             <Checkbox onChange={onChange}>Educación</Checkbox>
//             <Checkbox onChange={onChange}>Emprendimiento.</Checkbox>
//             <Checkbox onChange={onChange}>Participación ciudadana.</Checkbox>
//           </Row>
//         </ContainerCheckBox>
//       </Row>
//     </>
//   );
// };
