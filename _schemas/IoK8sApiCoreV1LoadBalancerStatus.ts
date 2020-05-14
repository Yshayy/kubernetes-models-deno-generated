import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1LoadBalancerIngress } from "./IoK8sApiCoreV1LoadBalancerIngress.ts";
const schema: object = {
  "properties": {
    "ingress": {
      "items": {
        "$ref": "io.k8s.api.core.v1.LoadBalancerIngress#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1LoadBalancerIngress();
register("io.k8s.api.core.v1.LoadBalancerStatus", schema);
}

