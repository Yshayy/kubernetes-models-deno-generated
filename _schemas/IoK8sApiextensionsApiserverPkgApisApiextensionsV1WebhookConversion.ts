import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig.ts";
const schema: object = {
  "properties": {
    "clientConfig": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig#"
    },
    "conversionReviewVersions": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "conversionReviewVersions"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion", schema);
}

