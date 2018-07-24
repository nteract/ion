// @flow

import type { ElevationLevel } from "./elevation";
import { Elevation } from "./elevation";

export function elevation(level: ?ElevationLevel): string {
  console.log(level);

  if (!level || !Elevation[level]) {
    return "nt-elevation-none";
  }

  return `nt-elevation-${Elevation[level]}`;
}
