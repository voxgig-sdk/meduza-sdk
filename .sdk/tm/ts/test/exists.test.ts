
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MeduzaSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MeduzaSDK.test()
    equal(testsdk instanceof MeduzaSDK, true,
      'MeduzaSDK.test() must return a client synchronously')
  })

})
