import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "scheduling.k8s.io/v1beta1"
      ]
    },
    "globalDefault": {
      "type": "boolean"
    },
    "kind": {
      "type": "string",
      "enum": [
        "PriorityClass"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "preemptionPolicy": {
      "type": "string"
    },
    "value": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "value",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
register("io.k8s.api.scheduling.v1beta1.PriorityClass", schema);
}

