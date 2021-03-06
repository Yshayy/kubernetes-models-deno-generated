import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiNetworkingV1beta1HTTPIngressRuleValue } from "./IoK8sApiNetworkingV1beta1HTTPIngressRuleValue.ts";
const schema: object = {
  "properties": {
    "host": {
      "type": "string"
    },
    "http": {
      "$ref": "io.k8s.api.networking.v1beta1.HTTPIngressRuleValue#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiNetworkingV1beta1HTTPIngressRuleValue();
register("io.k8s.api.networking.v1beta1.IngressRule", schema);
}

