import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNetworkingV1beta1HTTPIngressPath } from "./IoK8sApiNetworkingV1beta1HTTPIngressPath.ts";
const schema: object = {
  "properties": {
    "paths": {
      "items": {
        "$ref": "io.k8s.api.networking.v1beta1.HTTPIngressPath#"
      },
      "type": "array"
    }
  },
  "required": [
    "paths"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiNetworkingV1beta1HTTPIngressPath();
register("io.k8s.api.networking.v1beta1.HTTPIngressRuleValue", schema);
}

