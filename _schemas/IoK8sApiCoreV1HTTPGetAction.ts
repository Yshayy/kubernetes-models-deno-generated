import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1HTTPHeader } from "./IoK8sApiCoreV1HTTPHeader.ts";

import { addSchema as IoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";
const schema: object = {
  "properties": {
    "host": {
      "type": "string"
    },
    "httpHeaders": {
      "items": {
        "$ref": "io.k8s.api.core.v1.HTTPHeader#"
      },
      "type": "array"
    },
    "path": {
      "type": "string"
    },
    "port": {
      "$ref": "io.k8s.apimachinery.pkg.util.intstr.IntOrString#"
    },
    "scheme": {
      "type": "string"
    }
  },
  "required": [
    "port"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1HTTPHeader();
IoK8sApimachineryPkgUtilIntstrIntOrString();
register("io.k8s.api.core.v1.HTTPGetAction", schema);
}

