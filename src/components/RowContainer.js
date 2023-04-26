import React from "react";

function RowContainer(props) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {props.children}
    </div>
  );
}

export default RowContainer;