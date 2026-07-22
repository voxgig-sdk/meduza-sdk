
import { Context } from './Context'


class MeduzaError extends Error {

  isMeduzaError = true

  sdk = 'Meduza'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MeduzaError
}

