import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiPolicyV1beta1IDRange } from "./IoK8sApiPolicyV1beta1IDRange.ts";
const schema: object = {
  "properties": {
    "ranges": {
      "items": {
        "$ref": "io.k8s.api.policy.v1beta1.IDRange#"
      },
      "type": "array"
    },
    "rule": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiPolicyV1beta1IDRange();
register("io.k8s.api.policy.v1beta1.FSGroupStrategyOptions", schema);
}

