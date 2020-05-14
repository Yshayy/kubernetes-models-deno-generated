import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1NodeSelector } from "./IoK8sApiCoreV1NodeSelector.ts";
const schema: object = {
  "properties": {
    "required": {
      "$ref": "io.k8s.api.core.v1.NodeSelector#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1NodeSelector();
register("io.k8s.api.core.v1.VolumeNodeAffinity", schema);
}

