import { MeduzaEntityBase } from '../MeduzaEntityBase';
import type { MeduzaSDK } from '../MeduzaSDK';
import type { Control } from '../types';
import type { New, NewListMatch } from '../MeduzaTypes';
declare class NewEntity extends MeduzaEntityBase<New> {
    constructor(client: MeduzaSDK, entopts: any);
    make(this: NewEntity): NewEntity;
    list(this: any, reqmatch?: NewListMatch, ctrl?: Control): Promise<NewEntity[]>;
}
export { NewEntity };
