import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ComponentCondition } from "./IoK8sApiCoreV1ComponentCondition.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ComponentCondition#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "ComponentStatus"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApiCoreV1ComponentCondition();
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
register("io.k8s.api.core.v1.ComponentStatus", schema);
}

