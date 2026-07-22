
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://meduza.io/api/w5',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      new: {
      },

    }
  }


  entity = {
    "new": {
      "fields": [
        {
          "active": true,
          "name": "description",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "image",
          "req": false,
          "type": "`$OBJECT`",
          "index$": 1
        },
        {
          "active": true,
          "name": "pub_date",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "title",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "url",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        }
      ],
      "name": "new",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {},
              "method": "GET",
              "orig": "/screens/news",
              "parts": [
                "screens",
                "news"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

