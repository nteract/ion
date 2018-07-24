// @flow
import css from "styled-jsx/css";

export const elevationStyles = css`
  .nt-elevation-none {
  }
  .nt-elevation-low {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02), 0 0px 1px rgba(0, 0, 0, 0.9);
  }
  .nt-elevation-middle {
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2),
      0 2px 6px rgba(16, 22, 26, 0.2);
  }
  .nt-elevation-high {
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2),
      0 8px 24px rgba(16, 22, 26, 0.2);
  }
  .nt-elevation-highest {
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2),
      0 18px 46px 6px rgba(16, 22, 26, 0.2);
  }
`;

export const intentStyles = css`
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
      0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15),
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
      inset 0 0 0 1px rgba(16, 22, 26, 0.15),
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
    background: #fff;
    vertical-align: middle;
    color: #182026;
    -webkit-transition: -webkit-box-shadow 0.1s cubic-bezier(0.4, 1, 0.75, 0.9);
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
    box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0),
      inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15),
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  .nt-intent-success {
    -webkit-box-shadow: 0 0 0 0 rgba(15, 153, 96, 0),
      0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960,
      inset 0 0 0 1px rgba(16, 22, 26, 0.15),
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0),
      inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15),
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  .nt-intent-warning {
    -webkit-box-shadow: 0 0 0 0 rgba(217, 130, 43, 0),
      0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b,
      inset 0 0 0 1px rgba(16, 22, 26, 0.15),
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0),
      inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15),
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
  .nt-intent-danger {
    -webkit-box-shadow: 0 0 0 0 rgba(219, 55, 55, 0),
      0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737,
      inset 0 0 0 1px rgba(16, 22, 26, 0.15),
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
    box-shadow: 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0),
      inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15),
      inset 0 1px 1px rgba(16, 22, 26, 0.2);
  }
`;
