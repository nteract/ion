// @flow
import * as React from "react";
import classNames from "classnames";
import type { IntentLevel } from "../common/intent";
import { intentStyles } from "../common/styles";

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
        <style jsx>{intentStyles}</style>
      </div>
    );
  }
}
