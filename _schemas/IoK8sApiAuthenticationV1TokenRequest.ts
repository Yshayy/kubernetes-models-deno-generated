import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAuthenticationV1TokenRequestSpec } from "./IoK8sApiAuthenticationV1TokenRequestSpec.ts";

import { addSchema as IoK8sApiAuthenticationV1TokenRequestStatus } from "./IoK8sApiAuthenticationV1TokenRequestStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "authentication.k8s.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "TokenRequest"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.authentication.v1.TokenRequestSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.authentication.v1.TokenRequestStatus#"
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
IoK8sApiAuthenticationV1TokenRequestSpec();
IoK8sApiAuthenticationV1TokenRequestStatus();
register("io.k8s.api.authentication.v1.TokenRequest", schema);
}

