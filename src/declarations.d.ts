// Allow IDE to correctly detect CSS module imports
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}