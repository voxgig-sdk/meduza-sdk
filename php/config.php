<?php
declare(strict_types=1);

// Meduza SDK configuration

class MeduzaConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Meduza",
                "slug" => "meduza",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://meduza.io/api/w5",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "new" => [],
                ],
            ],
            "entity" => [
        'new' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'Brief description of the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'image',
              'short' => 'Article image information',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'pub_date',
              'short' => 'Publication date of the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the article',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'URL of the article',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'new',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/screens/news',
                  'parts' => [
                    'screens',
                    'news',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return MeduzaFeatures::make_feature($name);
    }
}
