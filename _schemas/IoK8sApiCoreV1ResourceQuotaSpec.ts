import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { addSchema as IoK8sApiCoreV1ScopeSelector } from "./IoK8sApiCoreV1ScopeSelector.ts";
const schema: object = {
  "properties": {
    "hard": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "scopeSelector": {
      "$ref": "io.k8s.api.core.v1.ScopeSelector#"
    },
    "scopes": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
IoK8sApiCoreV1ScopeSelector();
register("io.k8s.api.core.v1.ResourceQuotaSpec", schema);
}

