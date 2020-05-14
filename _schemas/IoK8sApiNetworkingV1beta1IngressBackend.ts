import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1TypedLocalObjectReference } from "./IoK8sApiCoreV1TypedLocalObjectReference.ts";

import { addSchema as IoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";
const schema: object = {
  "properties": {
    "resource": {
      "$ref": "io.k8s.api.core.v1.TypedLocalObjectReference#"
    },
    "serviceName": {
      "type": "string"
    },
    "servicePort": {
      "$ref": "io.k8s.apimachinery.pkg.util.intstr.IntOrString#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1TypedLocalObjectReference();
IoK8sApimachineryPkgUtilIntstrIntOrString();
register("io.k8s.api.networking.v1beta1.IngressBackend", schema);
}

