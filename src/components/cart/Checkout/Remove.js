const React = require("react");

function Remove(props, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const ForwardRef = React.forwardRef(Remove);
module.exports = ForwardRef;