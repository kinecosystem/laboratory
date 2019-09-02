import React from "react";
import Svg from "../static/image/exclamation_mark.svg";

// @param {string} props.href - Url that the help mark links to. Currently required
function HelpMark(props) {
  return (
    <a
      href={props.href}
      className="HelpMark"
      target="_blank"
    >
      <img className="HelpMark__img" src={Svg} alt="info" />
    </a>
  );
}
HelpMark.propTypes = {
  href: React.PropTypes.string
};

export default HelpMark;
