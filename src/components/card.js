// @flow
import * as React from "react";
import { Elevation } from "../common/elevation";
import type { ElevationLevel } from "../common/elevation";

import * as Classes from "../common/classes";
import { elevationStyles } from "../common/styles";

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
        <style jsx>{elevationStyles}</style>
      </div>
    );
  }
}
