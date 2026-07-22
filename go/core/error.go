package core

type MeduzaError struct {
	IsMeduzaError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMeduzaError(code string, msg string, ctx *Context) *MeduzaError {
	return &MeduzaError{
		IsMeduzaError: true,
		Sdk:              "Meduza",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MeduzaError) Error() string {
	return e.Msg
}
