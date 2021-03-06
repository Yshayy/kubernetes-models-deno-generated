import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1MicroTime } from "./IoK8sApimachineryPkgApisMetaV1MicroTime.ts";
const schema: object = {
  "properties": {
    "acquireTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"
    },
    "holderIdentity": {
      "type": "string"
    },
    "leaseDurationSeconds": {
      "format": "int32",
      "type": "integer"
    },
    "leaseTransitions": {
      "format": "int32",
      "type": "integer"
    },
    "renewTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1MicroTime();
register("io.k8s.api.coordination.v1.LeaseSpec", schema);
}

