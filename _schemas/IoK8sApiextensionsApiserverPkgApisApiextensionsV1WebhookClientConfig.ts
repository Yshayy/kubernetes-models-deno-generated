import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference.ts";
const schema: object = {
  "properties": {
    "caBundle": {
      "format": "byte",
      "type": "string"
    },
    "service": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference#"
    },
    "url": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReference();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig", schema);
}

