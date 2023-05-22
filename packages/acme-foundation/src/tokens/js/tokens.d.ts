/**
 * Do not edit directly
 * Generated on Mon, 22 May 2023 16:13:49 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "animations": {
    "default": DesignToken
  },
  "colors": {
    "primary": {
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken
    },
    "neutral": {
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken,
      "black": DesignToken,
      "white": DesignToken
    },
    "warning": {
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken
    },
    "danger": {
      "100": DesignToken,
      "200": DesignToken,
      "300": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "600": DesignToken,
      "700": DesignToken,
      "800": DesignToken,
      "900": DesignToken
    }
  },
  "radius": {
    "small": DesignToken,
    "large": DesignToken
  },
  "shadows": {
    "level-1": DesignToken,
    "level-2": DesignToken
  },
  "spacings": {
    "4": DesignToken,
    "8": DesignToken,
    "16": DesignToken,
    "32": DesignToken,
    "40": DesignToken,
    "48": DesignToken,
    "56": DesignToken,
    "64": DesignToken,
    "80": DesignToken,
    "100": DesignToken
  }
}
