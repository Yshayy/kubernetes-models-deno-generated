import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAppsV1RollingUpdateDeployment } from "./IoK8sApiAppsV1RollingUpdateDeployment.ts";
const schema: object = {
  "properties": {
    "rollingUpdate": {
      "$ref": "io.k8s.api.apps.v1.RollingUpdateDeployment#"
    },
    "type": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAppsV1RollingUpdateDeployment();
register("io.k8s.api.apps.v1.DeploymentStrategy", schema);
}

