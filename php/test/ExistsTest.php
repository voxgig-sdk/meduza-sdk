<?php
declare(strict_types=1);

// Meduza SDK exists test

require_once __DIR__ . '/../meduza_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MeduzaSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
