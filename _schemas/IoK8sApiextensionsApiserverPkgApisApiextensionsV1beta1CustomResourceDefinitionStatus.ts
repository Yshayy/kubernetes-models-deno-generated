import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition.ts";
const schema: object = {
  "properties": {
    "acceptedNames": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionNames#"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionCondition#"
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
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionNames();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceDefinitionCondition();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionStatus", schema);
}

