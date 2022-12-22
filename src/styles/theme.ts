import { color } from "./color";
import { typography } from "./typo";
import { action } from "./action";

import { Theme } from "@emotion/react";

export const theme: Theme = {
  breakPoint: {
    xs: 460,
    sm: 600,
    md: 1200,
    lg: 1536,
    xl: 1920,
  },
  color,
  typography,
  action,
  spacing: [8, 16, 20, 24],
  radius: 4,
};
