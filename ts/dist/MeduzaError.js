"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeduzaError = void 0;
class MeduzaError extends Error {
    isMeduzaError = true;
    sdk = 'Meduza';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MeduzaError = MeduzaError;
//# sourceMappingURL=MeduzaError.js.map