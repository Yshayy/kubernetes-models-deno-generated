import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "apiextensions.k8s.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "CustomResourceDefinition"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec#"
    },
    "status": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus#"
    }
  },
  "required": [
    "spec",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionSpec();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatus();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition", schema);
}

