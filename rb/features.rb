# Meduza SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MeduzaFeatures
  def self.make_feature(name)
    case name
    when "base"
      MeduzaBaseFeature.new
    when "test"
      MeduzaTestFeature.new
    else
      MeduzaBaseFeature.new
    end
  end
end
