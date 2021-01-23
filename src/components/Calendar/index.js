import React from "react";
import { Calendar } from "antd";

import { CalendarNone } from "./styled";

function onPanelChange(value, mode) {
  console.log(value.format("YYYY-MM-DD"), mode);
}

export const Calendario = () => {
  return (
    <>
      <CalendarNone>
        <Calendar
          style={{ width: "80%", margin: "0 auto", marginTop: "100px" }}
          onPanelChange={onPanelChange}
        />
      </CalendarNone>
    </>
  );
};
