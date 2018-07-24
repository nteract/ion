// @flow

import type { ElevationLevel } from "./elevation";
import type { IntentLevel } from "./intent";
import { Elevation } from "./elevation";
import { Intent } from "./intent";

export const FILL = `nt-fill`;
export const LARGE = `nt-large`;
export const INPUT = `nt-input`;

export function elevation(level: ?ElevationLevel): string {
  console.log(level);

  if (!level || !Elevation[level]) {
    return "nt-elevation-none";
  }

  return `nt-elevation-${Elevation[level]}`;
}

export function intent(level: ?IntentLevel): string {
  console.log(level);

  if (!level || !Intent[level]) {
    return "nt-intent-none";
  }

  return `nt-intent-${Intent[level]}`;
}
