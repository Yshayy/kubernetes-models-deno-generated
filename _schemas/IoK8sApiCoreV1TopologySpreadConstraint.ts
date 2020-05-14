import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";
const schema: object = {
  "properties": {
    "labelSelector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "maxSkew": {
      "format": "int32",
      "type": "integer"
    },
    "topologyKey": {
      "type": "string"
    },
    "whenUnsatisfiable": {
      "type": "string"
    }
  },
  "required": [
    "maxSkew",
    "topologyKey",
    "whenUnsatisfiable"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1LabelSelector();
register("io.k8s.api.core.v1.TopologySpreadConstraint", schema);
}

