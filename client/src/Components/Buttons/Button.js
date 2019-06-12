import React from "react";
import { Link } from "react-router-dom";

const Button = props => {
  return (
    <Link to='www.google.com'>
      <button type='button' value='start learning' > {props.children} 
      </button>
    </Link>
  );
};

export default Button;