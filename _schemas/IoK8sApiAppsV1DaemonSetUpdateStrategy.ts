import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAppsV1RollingUpdateDaemonSet } from "./IoK8sApiAppsV1RollingUpdateDaemonSet.ts";
const schema: object = {
  "properties": {
    "rollingUpdate": {
      "$ref": "io.k8s.api.apps.v1.RollingUpdateDaemonSet#"
    },
    "type": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAppsV1RollingUpdateDaemonSet();
register("io.k8s.api.apps.v1.DaemonSetUpdateStrategy", schema);
}

