import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAdmissionregistrationV1beta1ValidatingWebhook } from "./IoK8sApiAdmissionregistrationV1beta1ValidatingWebhook.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "admissionregistration.k8s.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ValidatingWebhookConfiguration"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "webhooks": {
      "items": {
        "$ref": "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhook#"
      },
      "type": "array"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiAdmissionregistrationV1beta1ValidatingWebhook();
register("io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration", schema);
}

