// @flow
import * as React from "react";
import { Elevation } from "../common/elevation";
import type { ElevationLevel } from "../common/elevation";

import * as Classes from "../common/classes";
import {
  ntElevationNone,
  ntElevationLow,
  ntElevationMiddle,
  ntElevationHigh,
  ntElevationHighest
} from "../common/styles";

type CardProps = {
  children: React.Node,
  elevation: ElevationLevel
};

export class Card extends React.Component<CardProps, null> {
  static defaultProps = {
    children: null,
    elevation: null
  };
  render() {
    console.log(this.props.elevation);
    const className = Classes.elevation(this.props.elevation);

    return (
      <div className={className} elevation={this.props.elevation}>
        {this.props.children}
        <style jsx>{ntElevationNone}</style>
        <style jsx>{ntElevationLow}</style>
        <style jsx>{ntElevationMiddle}</style>
        <style jsx>{ntElevationHigh}</style>
        <style jsx>{ntElevationHighest}</style>
      </div>
    );
  }
}
