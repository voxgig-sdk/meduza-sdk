package core

import "encoding/json"

type MeduzaError struct {
	IsMeduzaError bool
	Sdk                string
	Code               string
	Msg                string
	// Reachable for a debugger, invisible to a serialiser: the context holds
	// the live spec and options, and an error is what gets logged.
	Ctx    *Context `json:"-"`
	Result any
	Spec   any
}

func NewMeduzaError(code string, msg string, ctx *Context) *MeduzaError {
	return &MeduzaError{
		IsMeduzaError: true,
		Sdk:                "Meduza",
		Code:               code,
		Msg:                msg,
		Ctx:                ctx,
	}
}

func (e *MeduzaError) Error() string {
	return e.Msg
}

// What makeError attached is already cleaned; the context is not part of
// the record.
func (e *MeduzaError) Record() map[string]any {
	return map[string]any{
		"sdk":     e.Sdk,
		"code":    e.Code,
		"message": e.Msg,
		"result":  e.Result,
		"spec":    e.Spec,
	}
}

func (e *MeduzaError) MarshalJSON() ([]byte, error) {
	return json.Marshal(e.Record())
}
