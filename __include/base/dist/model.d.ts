declare type ModelData<T> = T extends {
    apiVersion: any;
    kind: any;
} ? Omit<T, "apiVersion" | "kind"> : T;
declare type ModelConstructor<T> = new () => Model<T>;
export declare class Model<T> {
    constructor(data?: ModelData<T>);
    toJSON(): any;
    validate(): void;
    static setSchema<T>(ctor: ModelConstructor<T>, id: string, addSchema: () => void): void;
}
export {};
