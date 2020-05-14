import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiStorageV1beta1VolumeError } from "./IoK8sApiStorageV1beta1VolumeError.ts";
const schema: object = {
  "properties": {
    "attachError": {
      "$ref": "io.k8s.api.storage.v1beta1.VolumeError#"
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
      "$ref": "io.k8s.api.storage.v1beta1.VolumeError#"
    }
  },
  "required": [
    "attached"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiStorageV1beta1VolumeError();
register("io.k8s.api.storage.v1beta1.VolumeAttachmentStatus", schema);
}

