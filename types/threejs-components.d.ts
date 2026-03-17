declare module "threejs-components/build/cursors/tubes1.min.js" {
  interface TubesCursorOptions {
    tubes?: {
      colors?: string[];
      lights?: {
        intensity?: number;
        colors?: string[];
      };
    };
  }

  interface TubesCursorApp {
    tubes: {
      setColors: (colors: string[]) => void;
      setLightsColors: (colors: string[]) => void;
    };
    dispose?: () => void;
  }

  export default function TubesCursor(
    canvas: HTMLCanvasElement,
    options?: TubesCursorOptions
  ): TubesCursorApp;
}
