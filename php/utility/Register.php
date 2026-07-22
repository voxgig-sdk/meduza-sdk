<?php
declare(strict_types=1);

// Meduza SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

MeduzaUtility::setRegistrar(function (MeduzaUtility $u): void {
    $u->clean = [MeduzaClean::class, 'call'];
    $u->done = [MeduzaDone::class, 'call'];
    $u->make_error = [MeduzaMakeError::class, 'call'];
    $u->feature_add = [MeduzaFeatureAdd::class, 'call'];
    $u->feature_hook = [MeduzaFeatureHook::class, 'call'];
    $u->feature_init = [MeduzaFeatureInit::class, 'call'];
    $u->fetcher = [MeduzaFetcher::class, 'call'];
    $u->make_fetch_def = [MeduzaMakeFetchDef::class, 'call'];
    $u->make_context = [MeduzaMakeContext::class, 'call'];
    $u->make_options = [MeduzaMakeOptions::class, 'call'];
    $u->make_request = [MeduzaMakeRequest::class, 'call'];
    $u->make_response = [MeduzaMakeResponse::class, 'call'];
    $u->make_result = [MeduzaMakeResult::class, 'call'];
    $u->make_point = [MeduzaMakePoint::class, 'call'];
    $u->make_spec = [MeduzaMakeSpec::class, 'call'];
    $u->make_url = [MeduzaMakeUrl::class, 'call'];
    $u->param = [MeduzaParam::class, 'call'];
    $u->prepare_auth = [MeduzaPrepareAuth::class, 'call'];
    $u->prepare_body = [MeduzaPrepareBody::class, 'call'];
    $u->prepare_headers = [MeduzaPrepareHeaders::class, 'call'];
    $u->prepare_method = [MeduzaPrepareMethod::class, 'call'];
    $u->prepare_params = [MeduzaPrepareParams::class, 'call'];
    $u->prepare_path = [MeduzaPreparePath::class, 'call'];
    $u->prepare_query = [MeduzaPrepareQuery::class, 'call'];
    $u->result_basic = [MeduzaResultBasic::class, 'call'];
    $u->result_body = [MeduzaResultBody::class, 'call'];
    $u->result_headers = [MeduzaResultHeaders::class, 'call'];
    $u->transform_request = [MeduzaTransformRequest::class, 'call'];
    $u->transform_response = [MeduzaTransformResponse::class, 'call'];
});
