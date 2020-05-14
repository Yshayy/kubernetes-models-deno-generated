import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources.ts";
const schema: object = {
  "properties": {
    "additionalPrinterColumns": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition#"
      },
      "type": "array"
    },
    "name": {
      "type": "string"
    },
    "schema": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation#"
    },
    "served": {
      "type": "boolean"
    },
    "storage": {
      "type": "boolean"
    },
    "subresources": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources#"
    }
  },
  "required": [
    "name",
    "served",
    "storage"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinition();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceValidation();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresources();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion", schema);
}

