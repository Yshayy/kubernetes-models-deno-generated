import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion.ts";
const schema: object = {
  "properties": {
    "conversion": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceConversion#"
    },
    "group": {
      "type": "string"
    },
    "names": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames#"
    },
    "preserveUnknownFields": {
      "type": "boolean"
    },
    "scope": {
      "type": "string"
    },
    "versions": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionVersion#"
      },
      "type": "array"
    }
  },
  "required": [
    "group",
    "names",
    "scope",
    "versions"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceConversion();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionVersion();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec", schema);
}

