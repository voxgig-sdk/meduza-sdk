-- Meduza SDK error

local MeduzaError = {}
MeduzaError.__index = MeduzaError


function MeduzaError.new(code, msg, ctx)
  local self = setmetatable({}, MeduzaError)
  self.is_sdk_error = true
  self.sdk = "Meduza"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MeduzaError:error()
  return self.msg
end


function MeduzaError:__tostring()
  return self.msg
end


return MeduzaError
