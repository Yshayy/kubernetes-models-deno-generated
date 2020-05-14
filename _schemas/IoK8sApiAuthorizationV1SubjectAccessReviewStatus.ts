import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "allowed": {
      "type": "boolean"
    },
    "denied": {
      "type": "boolean"
    },
    "evaluationError": {
      "type": "string"
    },
    "reason": {
      "type": "string"
    }
  },
  "required": [
    "allowed"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.authorization.v1.SubjectAccessReviewStatus", schema);
}

