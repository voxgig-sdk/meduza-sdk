# Meduza SDK exists test

require "minitest/autorun"
require_relative "../Meduza_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MeduzaSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
