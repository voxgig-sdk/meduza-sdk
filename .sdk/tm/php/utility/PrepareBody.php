<?php
declare(strict_types=1);

// Meduza SDK utility: prepare_body

class MeduzaPrepareBody
{
    public static function call(MeduzaContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
