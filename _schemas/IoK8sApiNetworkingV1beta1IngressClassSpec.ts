import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1TypedLocalObjectReference } from "./IoK8sApiCoreV1TypedLocalObjectReference.ts";
const schema: object = {
  "properties": {
    "controller": {
      "type": "string"
    },
    "parameters": {
      "$ref": "io.k8s.api.core.v1.TypedLocalObjectReference#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1TypedLocalObjectReference();
register("io.k8s.api.networking.v1beta1.IngressClassSpec", schema);
}

