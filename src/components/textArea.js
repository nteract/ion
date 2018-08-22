// @flow
import * as React from "react";
import type { IntentLevel } from "../common/intent";
import theme from "../common/theme";
import styled, { ThemeProvider } from "styled-components";
import {
  fontSize,
  boxShadow,
  width,
  borderRadius,
  borders
} from "styled-system";

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
  ${borderRadius};
  ${borders};
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
          border="none"
          borderRadius={3}
          fontSize={this.props.large}
          boxShadow={this.props.intent ? this.props.intent : "plain"}
          width={this.props.fill ? 1 : 1 / 5}
        >
          {this.props.children}
        </TextAreaWarpper>
      </ThemeProvider>
    );
  }
}
