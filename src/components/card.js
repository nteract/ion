import * as React from "react";

export class Card extends React.Component {
  static defaultProps = {
    children: null,
    elevation: null
  };
  render() {
    const className =
      this.props.elevation === 1
        ? "elevation-1"
        : this.props.elevation === 2
          ? "elevation-2"
          : "elevation-3";
    return (
      <div className={className} elevation={this.props.elevation}>
        {this.props.children}
        <style jsx>{`
          .elevation-1 {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02),
              0 0px 1px rgba(0, 0, 0, 0.9);
          }

          .elevation-2 {
            box-shadow: 5px 20px rgba(0, 0, 0, 0.02),
              0 0px 2px rgba(0, 0, 0, 0.9);
          }

          .elevation-3 {
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02),
              0 0px 3px rgba(0, 0, 0, 0.9);
          }
        `}</style>
      </div>
    );
  }
}
