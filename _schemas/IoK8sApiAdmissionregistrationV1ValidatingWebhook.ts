import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAdmissionregistrationV1WebhookClientConfig } from "./IoK8sApiAdmissionregistrationV1WebhookClientConfig.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { addSchema as IoK8sApiAdmissionregistrationV1RuleWithOperations } from "./IoK8sApiAdmissionregistrationV1RuleWithOperations.ts";
const schema: object = {
  "properties": {
    "admissionReviewVersions": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "clientConfig": {
      "$ref": "io.k8s.api.admissionregistration.v1.WebhookClientConfig#"
    },
    "failurePolicy": {
      "type": "string"
    },
    "matchPolicy": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "namespaceSelector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "objectSelector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "rules": {
      "items": {
        "$ref": "io.k8s.api.admissionregistration.v1.RuleWithOperations#"
      },
      "type": "array"
    },
    "sideEffects": {
      "type": "string"
    },
    "timeoutSeconds": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "name",
    "clientConfig",
    "sideEffects",
    "admissionReviewVersions"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiAdmissionregistrationV1WebhookClientConfig();
IoK8sApimachineryPkgApisMetaV1LabelSelector();
IoK8sApiAdmissionregistrationV1RuleWithOperations();
register("io.k8s.api.admissionregistration.v1.ValidatingWebhook", schema);
}

