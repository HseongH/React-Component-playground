import "@emotion/react";

// Color
interface ElemColorInterface {
  light: string;
  main: string;
  dark: string;
}

interface BackgroundColorInterface extends ElemColorInterface {}

interface ElemStatusInterface extends ElemColorInterface {
  text: string;
}

interface PaletteInterface {
  primary: ElemStatusInterface;
  success: ElemStatusInterface;
  error: ElemStatusInterface;
  excel: ElemStatusInterface;
}

// Typography

interface TypoInterface extends ElemColorInterface {
  success: string;
  error: string;
}

// Action
interface ActionInterface {
  focus: string;
  hover: string;
  disabled: string;
}

declare module "@emotion/react" {
  export interface Theme {
    breakPoint: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    color: {
      background: BackgroundColorInterface;
      border: string;
      palette: PaletteInterface;
    };
    typography: TypoInterface;
    action: ActionInterface;
    spacing: Array<number>;
    radius: number;
  }
}
