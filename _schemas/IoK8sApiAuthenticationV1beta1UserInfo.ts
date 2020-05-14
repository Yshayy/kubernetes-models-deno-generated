import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "extra": {
      "additionalProperties": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "type": "object"
    },
    "groups": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "uid": {
      "type": "string"
    },
    "username": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.authentication.v1beta1.UserInfo", schema);
}

