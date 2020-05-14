import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1LoadBalancerStatus } from "./IoK8sApiCoreV1LoadBalancerStatus.ts";
const schema: object = {
  "properties": {
    "loadBalancer": {
      "$ref": "io.k8s.api.core.v1.LoadBalancerStatus#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1LoadBalancerStatus();
register("io.k8s.api.extensions.v1beta1.IngressStatus", schema);
}

