package voxgigmeduzasdk

import (
	"github.com/voxgig-sdk/meduza-sdk/go/core"
	"github.com/voxgig-sdk/meduza-sdk/go/entity"
	"github.com/voxgig-sdk/meduza-sdk/go/feature"
	_ "github.com/voxgig-sdk/meduza-sdk/go/utility"
)

// Type aliases preserve external API.
type MeduzaSDK = core.MeduzaSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MeduzaEntity = core.MeduzaEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MeduzaError = core.MeduzaError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewNewEntityFunc = func(client *core.MeduzaSDK, entopts map[string]any) core.MeduzaEntity {
		return entity.NewNewEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMeduzaSDK = core.NewMeduzaSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMeduzaSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MeduzaSDK  { return NewMeduzaSDK(nil) }
func Test() *MeduzaSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
