import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAuthorizationV1NonResourceAttributes } from "./IoK8sApiAuthorizationV1NonResourceAttributes.ts";

import { addSchema as IoK8sApiAuthorizationV1ResourceAttributes } from "./IoK8sApiAuthorizationV1ResourceAttributes.ts";
const schema: object = {
  "properties": {
    "nonResourceAttributes": {
      "$ref": "io.k8s.api.authorization.v1.NonResourceAttributes#"
    },
    "resourceAttributes": {
      "$ref": "io.k8s.api.authorization.v1.ResourceAttributes#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAuthorizationV1NonResourceAttributes();
IoK8sApiAuthorizationV1ResourceAttributes();
register("io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec", schema);
}

