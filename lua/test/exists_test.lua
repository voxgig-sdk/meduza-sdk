-- Meduza SDK exists test

local sdk = require("meduza_sdk")

describe("MeduzaSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
