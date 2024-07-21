declare module "*.png" {
    const value: string;
    export = value;
}

declare function require(moduleName: string): string;