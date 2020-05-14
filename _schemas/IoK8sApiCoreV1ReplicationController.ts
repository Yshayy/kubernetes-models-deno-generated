import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1ReplicationControllerSpec } from "./IoK8sApiCoreV1ReplicationControllerSpec.ts";

import { addSchema as IoK8sApiCoreV1ReplicationControllerStatus } from "./IoK8sApiCoreV1ReplicationControllerStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ReplicationController"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.core.v1.ReplicationControllerSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.core.v1.ReplicationControllerStatus#"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiCoreV1ReplicationControllerSpec();
IoK8sApiCoreV1ReplicationControllerStatus();
register("io.k8s.api.core.v1.ReplicationController", schema);
}

