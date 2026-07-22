<?php
declare(strict_types=1);

// Meduza SDK base feature

class MeduzaBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MeduzaContext $ctx, array $options): void {}
    public function PostConstruct(MeduzaContext $ctx): void {}
    public function PostConstructEntity(MeduzaContext $ctx): void {}
    public function SetData(MeduzaContext $ctx): void {}
    public function GetData(MeduzaContext $ctx): void {}
    public function GetMatch(MeduzaContext $ctx): void {}
    public function SetMatch(MeduzaContext $ctx): void {}
    public function PrePoint(MeduzaContext $ctx): void {}
    public function PreSpec(MeduzaContext $ctx): void {}
    public function PreRequest(MeduzaContext $ctx): void {}
    public function PreResponse(MeduzaContext $ctx): void {}
    public function PreResult(MeduzaContext $ctx): void {}
    public function PreDone(MeduzaContext $ctx): void {}
    public function PreUnexpected(MeduzaContext $ctx): void {}
}
