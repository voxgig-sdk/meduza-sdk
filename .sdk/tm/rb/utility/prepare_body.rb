# Meduza SDK utility: prepare_body
require_relative 'media'
module MeduzaUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return MeduzaUtilities.raw_body(ctx.reqdata) if MeduzaUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
