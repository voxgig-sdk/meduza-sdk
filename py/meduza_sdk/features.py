# Meduza SDK feature factory

from meduza_sdk.feature.base_feature import MeduzaBaseFeature
from meduza_sdk.feature.ratelimit_feature import MeduzaRatelimitFeature
from meduza_sdk.feature.retry_feature import MeduzaRetryFeature
from meduza_sdk.feature.test_feature import MeduzaTestFeature
from meduza_sdk.feature.timeout_feature import MeduzaTimeoutFeature


_FEATURES = {
    "base": lambda: MeduzaBaseFeature(),
    "ratelimit": lambda: MeduzaRatelimitFeature(),
    "retry": lambda: MeduzaRetryFeature(),
    "test": lambda: MeduzaTestFeature(),
    "timeout": lambda: MeduzaTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
