import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion.ts";
const schema: object = {
  "properties": {
    "additionalPrinterColumns": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceColumnDefinition#"
      },
      "type": "array"
    },
    "conversion": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceConversion#"
    },
    "group": {
      "type": "string"
    },
    "names": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames#"
    },
    "preserveUnknownFields": {
      "type": "boolean"
    },
    "scope": {
      "type": "string"
    },
    "subresources": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresources#"
    },
    "validation": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceValidation#"
    },
    "version": {
      "type": "string"
    },
    "versions": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionVersion#"
      },
      "type": "array"
    }
  },
  "required": [
    "group",
    "names",
    "scope"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceColumnDefinition();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceConversion();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresources();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceValidation();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionVersion();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionSpec", schema);
}

