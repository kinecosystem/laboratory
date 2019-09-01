import React from "react";
import Svg from "../static/image/exclamation_mark.svg";
import ReactTooltip  from "react-tooltip";

// @param {string} props.href - Url that the help mark links to. Currently required
function HelpMark(props) {
  return (
    <a href={props.href} className="HelpMark" target="_blank">
      <a data-tip data-for='helpMark'>
        <img className='HelpMark__img' src={Svg} alt="info" />
      </a>
      <ReactTooltip className='helpMark_tooltip' id='helpMark' effect='solid'>
        <span>{props.text}</span>
      </ReactTooltip>
    </a>
  );
}
HelpMark.propTypes = {
  href: React.PropTypes.string,
  text: React.PropTypes.string.isRequired
};

export default HelpMark;
