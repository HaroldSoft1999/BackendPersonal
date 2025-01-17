import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (opt: import("passport-jwt").StrategyOptionsWithRequest) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        id: any;
        email: any;
    }>;
}
export {};
