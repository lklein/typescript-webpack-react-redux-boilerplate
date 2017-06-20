// TODO: download from live-site
export const schema = `{
  "type": "object",
  "title": "Analysis Config",
  "properties": {
    "AnalysisRules": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "Condition": {
            "type": "object",
            "properties": {
              "StepType": {
                "type": "string"
              },
              "FilterMatchType": {
                "type": "string"
              },
              "Constraints": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "uniqueItems": true
              },
              "TrafficFilters": {
                "type": "object"
              },
              "AssignmentUnits": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "SelectedAnalysisTemplates": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "uniqueItems": true
          }
        }
      },
      "uniqueItems": true
    },
    "ForayAppTemplates": {
      "type": "object"
    },
    "RegularTemplates": {
      "type": "object"
    }
  }
}`;
