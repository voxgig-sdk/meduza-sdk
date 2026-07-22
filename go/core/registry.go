package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewNewEntityFunc func(client *MeduzaSDK, entopts map[string]any) MeduzaEntity

