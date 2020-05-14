import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiExtensionsV1beta1IngressBackend } from "./IoK8sApiExtensionsV1beta1IngressBackend.ts";
const schema: object = {
  "properties": {
    "backend": {
      "$ref": "io.k8s.api.extensions.v1beta1.IngressBackend#"
    },
    "path": {
      "type": "string"
    },
    "pathType": {
      "type": "string"
    }
  },
  "required": [
    "backend"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiExtensionsV1beta1IngressBackend();
register("io.k8s.api.extensions.v1beta1.HTTPIngressPath", schema);
}

