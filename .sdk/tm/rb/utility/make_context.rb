# Meduza SDK utility: make_context
require_relative '../core/context'
module MeduzaUtilities
  MakeContext = ->(ctxmap, basectx) {
    MeduzaContext.new(ctxmap, basectx)
  }
end
