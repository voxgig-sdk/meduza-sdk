

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MeduzaSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('NewEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MEDUZA_TEST_LIVE=TRUE.
  afterEach(liveDelay('MEDUZA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MeduzaSDK.test()
    const ent = testsdk.New()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MEDUZA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'new.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Brief description of the article","type":"`$STRING`","index$":0},{"active":true,"name":"image","req":false,"short":"Article image information","type":"`$OBJECT`","index$":1},{"active":true,"format":"date-time","name":"pub_date","req":false,"short":"Publication date of the article","type":"`$STRING`","index$":2},{"active":true,"name":"title","req":false,"short":"Title of the article","type":"`$STRING`","index$":3},{"active":true,"name":"url","req":false,"short":"URL of the article","type":"`$STRING`","index$":4}],"name":"new","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /screens/news","json":"{\"operationId\":\"getNews\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"collection\":{\"description\":\"Collection metadata\",\"type\":\"object\"},\"documents\":{\"description\":\"Array of news articles\",\"items\":{\"properties\":{\"description\":{\"description\":\"Brief description of the article\",\"type\":\"string\"},\"image\":{\"description\":\"Article image information\",\"properties\":{\"url\":{\"description\":\"Image URL\",\"type\":\"string\"}},\"type\":\"object\"},\"pub_date\":{\"description\":\"Publication date of the article\",\"format\":\"date-time\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the article\",\"type\":\"string\"},\"url\":{\"description\":\"URL of the article\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successfully retrieved news articles\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/screens/news","segments":[{"lit":"screens"},{"lit":"news"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"new","name__orig":"new","Name":"New","name_":"new","name-":"new","NAME":"NEW","index$":0}, {"active":true,"entity":"new","key$":"BasicNewFlow","kind":"basic","name":"BasicNewFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"new_ref01"}}],"index$":0}]}, 'New')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let new_ref01_data = Object.values(setup.data.existing.new)[0] as any

    // LIST
    const new_ref01_ent = client.New()
    const new_ref01_match: any = {}

    const new_ref01_list = (await new_ref01_ent.list(new_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/new/NewTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MeduzaSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['new01','new02','new03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MEDUZA_TEST_NEW_ENTID': idmap,
    'MEDUZA_TEST_LIVE': 'FALSE',
    'MEDUZA_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MEDUZA_TEST_NEW_ENTID']

  const live = 'TRUE' === env.MEDUZA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MEDUZA_TEST_NEW_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MeduzaSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
