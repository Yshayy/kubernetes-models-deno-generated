import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps.ts";
const schema: object = {
  "properties": {
    "openAPIV3Schema": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaProps();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation", schema);
}

