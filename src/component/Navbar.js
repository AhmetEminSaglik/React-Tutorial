//rfc
import React from "react";

// export default function Navbar() {  or use the following code
const Navbar = (props) => {
  // this is function so props.title is good enough
  return (
    <div>
      <h2>Navbar Demo</h2>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Navbar;
