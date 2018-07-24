// @flow
import * as React from "react";
import classNames from "classnames";
import { Intent } from "../common/intent";
import type { IntentLevel } from "../common/intent";

import * as Classes from "../common/classes";

type TextAreaProps = {
  fill?: boolean,
  large?: boolean,
  intent?: IntentLevel
};

export class TextArea extends React.Component<TextAreaProps, null> {
  static defaultProps = {
    fill: null,
    large: null,
    intent: null
  };

  render() {
    const className = classNames(Classes.intent(this.props.intent), {
      [Classes.FILL]: this.props.fill,
      [Classes.LARGE]: this.props.large
    });

    return (
      <div>
        <textarea className={className} />
        <style jsx>{`
          .nt-fill {
            display: block;
            width: 100%;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          .nt-large {
            font-size: large;
          }
          .nt-intent-primary {
            outline: none;
            border: none;
            border-radius: 3px;
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0),
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            background: #fff;
            height: 30px;
            padding: 0 10px;
            vertical-align: middle;
            line-height: 30px;
            color: #182026;
            font-size: 14px;
            font-weight: 400;
            -webkit-transition: -webkit-box-shadow 0.1s
              cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: -webkit-box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
        `}</style>
      </div>
    );
  }
}
