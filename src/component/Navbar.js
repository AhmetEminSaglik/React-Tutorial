//rfc
import React from "react";
import PropTypes from "prop-types";
// export default function Navbar() {  or use the following code
const Navbar = (props) => {
  // this is function so props.title is good enough
  return (
    <div>
      <h4>Navbar Demo</h4>
      <h5>{props.title}</h5>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Default Title",
};
export default Navbar;
