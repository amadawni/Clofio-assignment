import React from "react";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // margin: "0 5px",
      }}
    >
      <div
        style={{
          fontSize: "30px",
        }}
      >
        Hi Jennie Moss
      </div>
      <div style={{ color: "#6c757d", opacity: "0.6" }}>
        Last scanned on March 20th, 2023 11:30PM IST
      </div>
    </div>
  );
}

export default Navbar;
