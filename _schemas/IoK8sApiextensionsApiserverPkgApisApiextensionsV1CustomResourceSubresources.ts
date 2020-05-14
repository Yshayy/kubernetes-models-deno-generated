import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus.ts";
const schema: object = {
  "properties": {
    "scale": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale#"
    },
    "status": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceScale();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceSubresourceStatus();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources", schema);
}

