<?php
declare(strict_types=1);

// Meduza SDK utility: result_headers

class MeduzaResultHeaders
{
    public static function call(MeduzaContext $ctx): ?MeduzaResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
