import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "containerID": {
      "type": "string"
    },
    "exitCode": {
      "format": "int32",
      "type": "integer"
    },
    "finishedAt": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "message": {
      "type": "string"
    },
    "reason": {
      "type": "string"
    },
    "signal": {
      "format": "int32",
      "type": "integer"
    },
    "startedAt": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    }
  },
  "required": [
    "exitCode"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.api.core.v1.ContainerStateTerminated", schema);
}

