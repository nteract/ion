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
    const className = classNames(
      Classes.INPUT,
      Classes.intent(this.props.intent),
      {
        [Classes.FILL]: this.props.fill,
        [Classes.LARGE]: this.props.large
      }
    );

    return (
      <div>
        <textarea className={className} intent={this.props.intent} />
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
          .nt-input {
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
            vertical-align: middle;
            color: #182026;
            -webkit-transition: -webkit-box-shadow 0.1s
              cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: -webkit-box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
            transition: box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9),
              -webkit-box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
          }
          .nt-intent-primary {
            -webkit-box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(19, 124, 189, 0),
              0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .nt-intent-success {
            -webkit-box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
              0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .nt-intent-warning {
            -webkit-box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
              0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
          .nt-intent-danger {
            -webkit-box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
              0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737,
              inset 0 0 0 1px rgba(16, 22, 26, 0.15),
              inset 0 1px 1px rgba(16, 22, 26, 0.2);
          }
        `}</style>
      </div>
    );
  }
}
