// @flow
import * as React from "react";
import type { IntentLevel } from "../common/intent";
import theme from "./theme";

import styled, { ThemeProvider } from "styled-components";
import { fontSize, boxShadow, width } from "styled-system";

type TextAreaProps = {
  fill?: boolean,
  large?: number,
  intent?: IntentLevel,
  children: React.Node
};

const TextAreaWarpper = styled.textarea`
  ${fontSize};
  ${boxShadow};
  ${width};
`;

export class TextArea extends React.Component<TextAreaProps, null> {
  static defaultProps = {
    fill: null,
    large: null,
    intent: null,
    children: null
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <TextAreaWarpper
          fontSize={this.props.large}
          boxShadow={this.props.intent}
          width={this.props.fill ? 1 : 1 / 5}
        >
          {this.props.children}
        </TextAreaWarpper>
      </ThemeProvider>
    );
  }
}
