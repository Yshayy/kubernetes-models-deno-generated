import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiStorageV1alpha1VolumeError } from "./IoK8sApiStorageV1alpha1VolumeError.ts";
const schema: object = {
  "properties": {
    "attachError": {
      "$ref": "io.k8s.api.storage.v1alpha1.VolumeError#"
    },
    "attached": {
      "type": "boolean"
    },
    "attachmentMetadata": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "detachError": {
      "$ref": "io.k8s.api.storage.v1alpha1.VolumeError#"
    }
  },
  "required": [
    "attached"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiStorageV1alpha1VolumeError();
register("io.k8s.api.storage.v1alpha1.VolumeAttachmentStatus", schema);
}

