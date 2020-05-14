import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1KeyToPath } from "./IoK8sApiCoreV1KeyToPath.ts";
const schema: object = {
  "properties": {
    "defaultMode": {
      "format": "int32",
      "type": "integer"
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.core.v1.KeyToPath#"
      },
      "type": "array"
    },
    "name": {
      "type": "string"
    },
    "optional": {
      "type": "boolean"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1KeyToPath();
register("io.k8s.api.core.v1.ConfigMapVolumeSource", schema);
}

