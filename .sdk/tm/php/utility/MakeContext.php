<?php
declare(strict_types=1);

// Meduza SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MeduzaMakeContext
{
    public static function call(array $ctxmap, ?MeduzaContext $basectx): MeduzaContext
    {
        return new MeduzaContext($ctxmap, $basectx);
    }
}
