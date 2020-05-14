import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiAppsV1RollingUpdateStatefulSetStrategy } from "./IoK8sApiAppsV1RollingUpdateStatefulSetStrategy.ts";
const schema: object = {
  "properties": {
    "rollingUpdate": {
      "$ref": "io.k8s.api.apps.v1.RollingUpdateStatefulSetStrategy#"
    },
    "type": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiAppsV1RollingUpdateStatefulSetStrategy();
register("io.k8s.api.apps.v1.StatefulSetUpdateStrategy", schema);
}

