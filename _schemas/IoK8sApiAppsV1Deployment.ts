import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiAppsV1DeploymentSpec } from "./IoK8sApiAppsV1DeploymentSpec.ts";

import { addSchema as IoK8sApiAppsV1DeploymentStatus } from "./IoK8sApiAppsV1DeploymentStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "apps/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Deployment"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.apps.v1.DeploymentSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.apps.v1.DeploymentStatus#"
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
IoK8sApiAppsV1DeploymentSpec();
IoK8sApiAppsV1DeploymentStatus();
register("io.k8s.api.apps.v1.Deployment", schema);
}

