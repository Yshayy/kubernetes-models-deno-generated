import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAdmissionregistrationV1ServiceReference } from "./IoK8sApiAdmissionregistrationV1ServiceReference.ts";
const schema: object = {
  "properties": {
    "caBundle": {
      "format": "byte",
      "type": "string"
    },
    "service": {
      "$ref": "io.k8s.api.admissionregistration.v1.ServiceReference#"
    },
    "url": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAdmissionregistrationV1ServiceReference();
register("io.k8s.api.admissionregistration.v1.WebhookClientConfig", schema);
}

