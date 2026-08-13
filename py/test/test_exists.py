# Meduza SDK exists test

import pytest
from meduza_sdk import MeduzaSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MeduzaSDK.test(None, None)
        assert testsdk is not None
