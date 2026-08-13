# Meduza SDK utility: make_context

from projectname_sdk.core.context import MeduzaContext


def make_context_util(ctxmap, basectx):
    return MeduzaContext(ctxmap, basectx)
