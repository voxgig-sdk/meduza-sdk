<?php
declare(strict_types=1);

// Meduza SDK utility: result_body

class MeduzaResultBody
{
    public static function call(MeduzaContext $ctx): ?MeduzaResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
