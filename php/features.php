<?php
declare(strict_types=1);

// Meduza SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MeduzaFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MeduzaBaseFeature();
            case "test":
                return new MeduzaTestFeature();
            default:
                return new MeduzaBaseFeature();
        }
    }
}
