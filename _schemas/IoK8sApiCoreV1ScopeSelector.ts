import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ScopedResourceSelectorRequirement } from "./IoK8sApiCoreV1ScopedResourceSelectorRequirement.ts";
const schema: object = {
  "properties": {
    "matchExpressions": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ScopedResourceSelectorRequirement#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ScopedResourceSelectorRequirement();
register("io.k8s.api.core.v1.ScopeSelector", schema);
}

