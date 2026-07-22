# Meduza SDK feature factory

from feature.base_feature import MeduzaBaseFeature
from feature.test_feature import MeduzaTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MeduzaBaseFeature(),
        "test": lambda: MeduzaTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
