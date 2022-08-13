import React from "react";

function NavbarComp(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default NavbarComp;
