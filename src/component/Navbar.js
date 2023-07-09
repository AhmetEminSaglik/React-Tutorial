//rfc
import React from "react";
import PropTypes from "prop-types";
import AddUser from "./AddUser";
// export default function Navbar() {  or use the following code
const Navbar = (props) => {
  // this is function so props.title is good enough
  return (
    <div>
      <h4>{props.title}</h4>
      <hr />
      <AddUser />
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
