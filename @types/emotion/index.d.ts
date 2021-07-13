import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      backMain: string;
      backSub: string;
      line: string;
      textPrime: string;
      textSecond: string;
      highlight: string;
    };
    breakpoint: {
      tablet: string;
      mobile: string;
    };
  }
}
