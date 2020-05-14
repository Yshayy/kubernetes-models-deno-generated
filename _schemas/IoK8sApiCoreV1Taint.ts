import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "effect": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "timeAdded": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "value": {
      "type": "string"
    }
  },
  "required": [
    "key",
    "effect"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.api.core.v1.Taint", schema);
}

