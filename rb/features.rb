# Meduza SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MeduzaFeatures
  def self.make_feature(name)
    case name
    when "base"
      MeduzaBaseFeature.new
    when "ratelimit"
      MeduzaRatelimitFeature.new
    when "retry"
      MeduzaRetryFeature.new
    when "test"
      MeduzaTestFeature.new
    when "timeout"
      MeduzaTimeoutFeature.new
    else
      MeduzaBaseFeature.new
    end
  end
end
