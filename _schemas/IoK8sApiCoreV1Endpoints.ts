import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1EndpointSubset } from "./IoK8sApiCoreV1EndpointSubset.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Endpoints"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "subsets": {
      "items": {
        "$ref": "io.k8s.api.core.v1.EndpointSubset#"
      },
      "type": "array"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiCoreV1EndpointSubset();
register("io.k8s.api.core.v1.Endpoints", schema);
}

