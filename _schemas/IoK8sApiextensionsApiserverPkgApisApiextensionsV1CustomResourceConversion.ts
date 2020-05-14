import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.ts";
const schema: object = {
  "properties": {
    "strategy": {
      "type": "string"
    },
    "webhook": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion#"
    }
  },
  "required": [
    "strategy"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion", schema);
}

