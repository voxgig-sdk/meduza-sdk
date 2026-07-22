# Meduza SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MeduzaUtility.registrar = ->(u) {
  u.clean = MeduzaUtilities::Clean
  u.done = MeduzaUtilities::Done
  u.make_error = MeduzaUtilities::MakeError
  u.feature_add = MeduzaUtilities::FeatureAdd
  u.feature_hook = MeduzaUtilities::FeatureHook
  u.feature_init = MeduzaUtilities::FeatureInit
  u.fetcher = MeduzaUtilities::Fetcher
  u.make_fetch_def = MeduzaUtilities::MakeFetchDef
  u.make_context = MeduzaUtilities::MakeContext
  u.make_options = MeduzaUtilities::MakeOptions
  u.make_request = MeduzaUtilities::MakeRequest
  u.make_response = MeduzaUtilities::MakeResponse
  u.make_result = MeduzaUtilities::MakeResult
  u.make_point = MeduzaUtilities::MakePoint
  u.make_spec = MeduzaUtilities::MakeSpec
  u.make_url = MeduzaUtilities::MakeUrl
  u.param = MeduzaUtilities::Param
  u.prepare_auth = MeduzaUtilities::PrepareAuth
  u.prepare_body = MeduzaUtilities::PrepareBody
  u.prepare_headers = MeduzaUtilities::PrepareHeaders
  u.prepare_method = MeduzaUtilities::PrepareMethod
  u.prepare_params = MeduzaUtilities::PrepareParams
  u.prepare_path = MeduzaUtilities::PreparePath
  u.prepare_query = MeduzaUtilities::PrepareQuery
  u.result_basic = MeduzaUtilities::ResultBasic
  u.result_body = MeduzaUtilities::ResultBody
  u.result_headers = MeduzaUtilities::ResultHeaders
  u.transform_request = MeduzaUtilities::TransformRequest
  u.transform_response = MeduzaUtilities::TransformResponse
}
