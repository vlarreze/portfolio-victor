import React, { Component } from "react";
import Style from "./TriangleElement3.module.scss";

export default class TriangleElement3 extends Component {
  render() {
    return (
        <svg viewBox="0 0 30 30" className={Style.cssTriangleElement3SVG}><polygon strokeWidth="1px" strokeLinejoin="round" strokeMiterlimit="10" points="14.921,2.27 28.667,25.5 1.175,25.5 "></polygon></svg>
    );
  }
}
