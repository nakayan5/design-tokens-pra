/**
 * Do not edit directly
 * Generated on Tue, 28 Jun 2022 10:22:37 GMT
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
  "primary": DesignToken,
  "secondary": DesignToken
}