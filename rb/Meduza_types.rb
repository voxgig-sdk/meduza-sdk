# frozen_string_literal: true

# Typed models for the Meduza SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# New entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] pub_date
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
New = Struct.new(
  :description,
  :image,
  :pub_date,
  :title,
  :url,
  keyword_init: true
)

# Request payload for New#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] pub_date
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
NewListMatch = Struct.new(
  :description,
  :image,
  :pub_date,
  :title,
  :url,
  keyword_init: true
)

