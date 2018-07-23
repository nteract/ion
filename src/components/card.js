// @flow
import * as React from "react";
import { Elevation } from "../common/elevation";
import type { ElevationLevel } from "../common/elevation";

import * as Classes from "../common/classes";

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
        <style jsx>{`
          .nt-elevation-none {
          }

          .nt-elevation-low {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02),
              0 0px 1px rgba(0, 0, 0, 0.9);
          }

          .nt-elevation-middle {
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);
          }

          .nt-elevation-high {
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          }

          .nt-elevation-highest {
            box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1),
              0 4px 8px rgba(16, 22, 26, 0.2),
              0 18px 46px 6px rgba(16, 22, 26, 0.2);
          }
        `}</style>
      </div>
    );
  }
}
