import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1DownwardAPIVolumeFile } from "./IoK8sApiCoreV1DownwardAPIVolumeFile.ts";
const schema: object = {
  "properties": {
    "items": {
      "items": {
        "$ref": "io.k8s.api.core.v1.DownwardAPIVolumeFile#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1DownwardAPIVolumeFile();
register("io.k8s.api.core.v1.DownwardAPIProjection", schema);
}

