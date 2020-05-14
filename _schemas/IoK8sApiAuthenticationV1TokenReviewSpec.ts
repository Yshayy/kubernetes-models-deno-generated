import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "audiences": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "token": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.authentication.v1.TokenReviewSpec", schema);
}

