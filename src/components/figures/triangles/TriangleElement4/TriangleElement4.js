import React, { Component } from "react";
import Style from "./TriangleElement4.module.scss";

export default class TriangleElement4 extends Component {
  render() {
    return (
        <svg viewBox="0 0 30 30" className={Style.cssTriangleElement4SVG}><polygon stroke-width="1px" stroke-linejoin="round" stroke-miterlimit="10" points="14.921,2.27 28.667,25.5 1.175,25.5 "></polygon></svg>
    );
  }
}
