// @flow
import css from "styled-jsx/css";

export const ntElevationNone = css`
  .nt-elevation-none {
  }
`;
export const ntElevationLow = css`
  .nt-elevation-low {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02), 0 0px 1px rgba(0, 0, 0, 0.9);
  }
`;
export const ntElevationMiddle = css`
  .nt-elevation-middle {
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2),
      0 2px 6px rgba(16, 22, 26, 0.2);
  }
`;
export const ntElevationHigh = css`
  .nt-elevation-high {
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2),
      0 8px 24px rgba(16, 22, 26, 0.2);
  }
`;
export const ntElevationHighest = css`
  .nt-elevation-highest {
    box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2),
      0 18px 46px 6px rgba(16, 22, 26, 0.2);
  }
`;
