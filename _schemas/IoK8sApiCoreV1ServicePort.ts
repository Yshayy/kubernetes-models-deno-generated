import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";
const schema: object = {
  "properties": {
    "appProtocol": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "nodePort": {
      "format": "int32",
      "type": "integer"
    },
    "port": {
      "format": "int32",
      "type": "integer"
    },
    "protocol": {
      "type": "string"
    },
    "targetPort": {
      "$ref": "io.k8s.apimachinery.pkg.util.intstr.IntOrString#"
    }
  },
  "required": [
    "port"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgUtilIntstrIntOrString();
register("io.k8s.api.core.v1.ServicePort", schema);
}

