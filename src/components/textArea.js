// @flow
import * as React from "react";

type TextAreaProps = {
  fill?: boolean,
  large?: boolean
};

export class TextArea extends React.Component<TextAreaProps, null> {
  static defaultProps = {
    fill: null,
    large: null
  };

  render() {
    let className = "";
    const props = this.props;

    Object.keys(props).map(prop => {
      if (props[prop]) {
        className += " " + prop;
      }
    });

    return (
      <div>
        <textarea className={className} />
        <style jsx>{`
          .fill {
            display: block;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          .large {
            font-size: large;
          }
        `}</style>
      </div>
    );
  }
}
