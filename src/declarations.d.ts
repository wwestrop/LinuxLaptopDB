// Allow IDE to correctly detect CSS module imports
declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export = classes;
}

declare namespace NodeJS {
  interface ProcessEnv {
    API_BASE_URL?: string;
  }
}

declare var process: {
  env: NodeJS.ProcessEnv;
};