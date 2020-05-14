import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1SELinuxOptions } from "./IoK8sApiCoreV1SELinuxOptions.ts";
const schema: object = {
  "properties": {
    "rule": {
      "type": "string"
    },
    "seLinuxOptions": {
      "$ref": "io.k8s.api.core.v1.SELinuxOptions#"
    }
  },
  "required": [
    "rule"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1SELinuxOptions();
register("io.k8s.api.policy.v1beta1.SELinuxStrategyOptions", schema);
}

