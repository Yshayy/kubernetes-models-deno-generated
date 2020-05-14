import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition.ts";
const schema: object = {
  "properties": {
    "acceptedNames": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames#"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition#"
      },
      "type": "array"
    },
    "storedVersions": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus", schema);
}

