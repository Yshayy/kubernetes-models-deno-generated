import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1PreferredSchedulingTerm } from "./IoK8sApiCoreV1PreferredSchedulingTerm.ts";

import { addSchema as IoK8sApiCoreV1NodeSelector } from "./IoK8sApiCoreV1NodeSelector.ts";
const schema: object = {
  "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "items": {
        "$ref": "io.k8s.api.core.v1.PreferredSchedulingTerm#"
      },
      "type": "array"
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "$ref": "io.k8s.api.core.v1.NodeSelector#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1PreferredSchedulingTerm();
IoK8sApiCoreV1NodeSelector();
register("io.k8s.api.core.v1.NodeAffinity", schema);
}

