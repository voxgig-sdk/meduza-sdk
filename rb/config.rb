# Meduza SDK configuration

module MeduzaConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Meduza",
        "slug" => "meduza",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://meduza.io/api/w5",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "new" => {},
        },
      },
      "entity" => {
        "new" => {
          "fields" => [
            {
              "name" => "description",
              "short" => "Brief description of the article",
              "type" => "`$STRING`",
            },
            {
              "name" => "image",
              "short" => "Article image information",
              "type" => "`$OBJECT`",
            },
            {
              "format" => "date-time",
              "name" => "pub_date",
              "short" => "Publication date of the article",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "short" => "Title of the article",
              "type" => "`$STRING`",
            },
            {
              "name" => "url",
              "short" => "URL of the article",
              "type" => "`$STRING`",
            },
          ],
          "name" => "new",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/screens/news",
                  "segments" => [
                    {
                      "lit" => "screens",
                    },
                    {
                      "lit" => "news",
                    },
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "screens",
                    "news",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MeduzaFeatures.make_feature(name)
  end
end
