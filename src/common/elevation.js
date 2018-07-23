// @flow

export const Elevation = {
  none: "none",
  low: "low",
  middle: "middle",
  high: "high",
  highest: "highest"
};

// Keys and values have to be the same for this trick
export type ElevationLevel = $Keys<typeof Elevation>;
