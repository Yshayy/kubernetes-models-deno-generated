import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiExtensionsV1beta1HTTPIngressRuleValue } from "./IoK8sApiExtensionsV1beta1HTTPIngressRuleValue.ts";
const schema: object = {
  "properties": {
    "host": {
      "type": "string"
    },
    "http": {
      "$ref": "io.k8s.api.extensions.v1beta1.HTTPIngressRuleValue#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiExtensionsV1beta1HTTPIngressRuleValue();
register("io.k8s.api.extensions.v1beta1.IngressRule", schema);
}

