import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1StatusCause } from "./IoK8sApimachineryPkgApisMetaV1StatusCause.ts";
const schema: object = {
  "properties": {
    "causes": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause#"
      },
      "type": "array"
    },
    "group": {
      "type": "string"
    },
    "kind": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "retryAfterSeconds": {
      "format": "int32",
      "type": "integer"
    },
    "uid": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1StatusCause();
register("io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails", schema);
}

