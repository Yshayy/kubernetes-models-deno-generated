import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiStorageV1alpha1VolumeAttachmentSource } from "./IoK8sApiStorageV1alpha1VolumeAttachmentSource.ts";
const schema: object = {
  "properties": {
    "attacher": {
      "type": "string"
    },
    "nodeName": {
      "type": "string"
    },
    "source": {
      "$ref": "io.k8s.api.storage.v1alpha1.VolumeAttachmentSource#"
    }
  },
  "required": [
    "attacher",
    "source",
    "nodeName"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiStorageV1alpha1VolumeAttachmentSource();
register("io.k8s.api.storage.v1alpha1.VolumeAttachmentSpec", schema);
}

