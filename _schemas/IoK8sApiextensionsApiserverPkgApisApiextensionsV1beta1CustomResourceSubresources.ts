import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceScale } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceScale.ts";

import { addSchema as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceStatus } from "./IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceStatus.ts";
const schema: object = {
  "properties": {
    "scale": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresourceScale#"
    },
    "status": {
      "$ref": "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresourceStatus#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceScale();
IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1CustomResourceSubresourceStatus();
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresources", schema);
}

