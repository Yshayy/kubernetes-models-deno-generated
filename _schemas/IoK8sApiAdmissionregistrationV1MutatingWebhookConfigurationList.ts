import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration } from "./IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "admissionregistration.k8s.io/v1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "MutatingWebhookConfigurationList"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#"
    }
  },
  "required": [
    "items",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.admissionregistration.v1.MutatingWebhookConfigurationList", schema);
}

