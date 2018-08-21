// @flow

export const Intent = {
  none: "plain",
  primary: "primary",
  success: "success",
  warning: "warning",
  danger: "danger"
};

// Keys and values have to be the same for this trick
export type IntentLevel = $Keys<typeof Intent>;
