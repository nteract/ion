// @flow
import * as React from "react";
import type { ElevationLevel } from "../common/elevation";

import theme from "./theme";

import styled, { ThemeProvider } from "styled-components";
import { boxShadow } from "styled-system";

type CardProps = {
  children: React.Node,
  elevation: ElevationLevel
};

const CardWarpper = styled.div`
  ${boxShadow};
`;

export class Card extends React.Component<CardProps, null> {
  static defaultProps = {
    children: null,
    elevation: null
  };
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CardWarpper boxShadow={this.props.elevation}>
          {this.props.children}
        </CardWarpper>
      </ThemeProvider>
    );
  }
}
