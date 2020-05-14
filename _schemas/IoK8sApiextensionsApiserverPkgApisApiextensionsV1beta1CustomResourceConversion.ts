import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig.ts";
const schema: object = {
  "properties": {
    "conversionReviewVersions": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "strategy": {
      "type": "string"
    },
    "webhookClientConfig": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.WebhookClientConfig#"
    }
  },
  "required": [
    "strategy"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1WebhookClientConfig();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceConversion", schema);
}

