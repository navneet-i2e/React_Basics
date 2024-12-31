import React from "react";

const Header = () => {
  console.log("Header Rendered");
  return (
    <>
      <h2>Header</h2>
    </>
  );
};

export default React.memo(Header);
