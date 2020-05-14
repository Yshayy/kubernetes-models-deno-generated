import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAuthorizationV1NonResourceRule } from "./IoK8sApiAuthorizationV1NonResourceRule.ts";

import { addSchema as IoK8sApiAuthorizationV1ResourceRule } from "./IoK8sApiAuthorizationV1ResourceRule.ts";
const schema: object = {
  "properties": {
    "evaluationError": {
      "type": "string"
    },
    "incomplete": {
      "type": "boolean"
    },
    "nonResourceRules": {
      "items": {
        "$ref": "io.k8s.api.authorization.v1.NonResourceRule#"
      },
      "type": "array"
    },
    "resourceRules": {
      "items": {
        "$ref": "io.k8s.api.authorization.v1.ResourceRule#"
      },
      "type": "array"
    }
  },
  "required": [
    "resourceRules",
    "nonResourceRules",
    "incomplete"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAuthorizationV1NonResourceRule();
IoK8sApiAuthorizationV1ResourceRule();
register("io.k8s.api.authorization.v1.SubjectRulesReviewStatus", schema);
}

