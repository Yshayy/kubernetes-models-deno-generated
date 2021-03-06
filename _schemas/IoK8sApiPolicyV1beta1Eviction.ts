import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1DeleteOptions } from "./IoK8sApimachineryPkgApisMetaV1DeleteOptions.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "policy/v1beta1"
      ]
    },
    "deleteOptions": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions#"
    },
    "kind": {
      "type": "string",
      "enum": [
        "Eviction"
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
IoK8sApimachineryPkgApisMetaV1DeleteOptions();
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
register("io.k8s.api.policy.v1beta1.Eviction", schema);
}

