import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      backMain: string;
      backSub: string;
      line: string;
      textMain: string;
      textSub: string;
      accentSub: string;
      accentMain: string;
    };
    breakpoint: {
      tablet: string;
      mobile: string;
    };
  }
}
