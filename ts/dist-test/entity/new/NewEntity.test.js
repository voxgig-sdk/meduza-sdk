"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('NewEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MEDUZA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MEDUZA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MeduzaSDK.test();
        const ent = testsdk.New();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MEDUZA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'new.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Brief description of the article", "t": "`$STRING`", "key$": "description", "index$": 0 }, "image": { "a": true, "h": "Image", "n": "image", "r": false, "sh": "Article image information", "t": "`$OBJECT`", "key$": "image", "index$": 1 }, "pub_date": { "a": true, "fo": "date-time", "h": "Pub Date", "n": "pub_date", "r": false, "sh": "Publication date of the article", "t": "`$STRING`", "key$": "pub_date", "index$": 2 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "sh": "Title of the article", "t": "`$STRING`", "key$": "title", "index$": 3 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "sh": "URL of the article", "t": "`$STRING`", "key$": "url", "index$": 4 } }, "name": "new", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /screens/news", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/screens/news", "q": {}, "r": {}, "s": [{ "lit": "screens" }, { "lit": "news" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "new", "name__orig": "new", "Name": "New", "name_": "new", "name-": "new", "NAME": "NEW", "index$": 0 }, { "active": true, "entity": "new", "key$": "BasicNewFlow", "kind": "basic", "name": "BasicNewFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "new_ref01" } }], "index$": 0 }] }, 'New', { "GET /screens/news": { "protocol": "http", "operationId": "getNews", "responses": { "200": { "description": "Successfully retrieved news articles", "content": { "application/json": { "schema": { "type": "object", "properties": { "documents": { "description": "Array of news articles", "items": { "properties": { "description": { "description": "Brief description of the article", "type": "string", "key$": "description" }, "image": { "description": "Article image information", "properties": { "url": { "description": "Image URL", "type": "string" } }, "type": "object", "key$": "image" }, "pub_date": { "description": "Publication date of the article", "format": "date-time", "type": "string", "key$": "pub_date" }, "title": { "description": "Title of the article", "type": "string", "key$": "title" }, "url": { "description": "URL of the article", "type": "string", "key$": "url" } }, "type": "object", "index$": 0 }, "key$": "documents", "type": "array" }, "collection": { "description": "Collection metadata", "key$": "collection", "type": "object" } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } } } } } } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let new_ref01_data = Object.values(setup.data.existing.new)[0];
        // LIST
        const new_ref01_ent = client.New();
        const new_ref01_match = {};
        const new_ref01_list = (await new_ref01_ent.list(new_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/new/NewTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MeduzaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['new01', 'new02', 'new03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MEDUZA_TEST_NEW_ENTID': idmap,
        'MEDUZA_TEST_LIVE': 'FALSE',
        'MEDUZA_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['MEDUZA_TEST_NEW_ENTID'];
    const live = 'TRUE' === env.MEDUZA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MEDUZA_TEST_NEW_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MeduzaSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.MEDUZA_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=NewEntity.test.js.map