import { NewEntity } from './entity/NewEntity';
export type * from './MeduzaTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { MeduzaEntityBase } from './MeduzaEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class MeduzaSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    New(entopts?: Record<string, any>): NewEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): MeduzaSDK;
    tester(testopts?: any, sdkopts?: any): MeduzaSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof MeduzaSDK;
export { stdutil, config, BaseFeature, MeduzaEntityBase, MeduzaSDK, SDK, };
export type { DirectResult };
