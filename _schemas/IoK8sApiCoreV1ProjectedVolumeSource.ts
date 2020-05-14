import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1VolumeProjection } from "./IoK8sApiCoreV1VolumeProjection.ts";
const schema: object = {
  "properties": {
    "defaultMode": {
      "format": "int32",
      "type": "integer"
    },
    "sources": {
      "items": {
        "$ref": "io.k8s.api.core.v1.VolumeProjection#"
      },
      "type": "array"
    }
  },
  "required": [
    "sources"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1VolumeProjection();
register("io.k8s.api.core.v1.ProjectedVolumeSource", schema);
}

