import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1PersistentVolumeSpec } from "./IoK8sApiCoreV1PersistentVolumeSpec.ts";
const schema: object = {
  "properties": {
    "inlineVolumeSpec": {
      "$ref": "io.k8s.api.core.v1.PersistentVolumeSpec#"
    },
    "persistentVolumeName": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1PersistentVolumeSpec();
register("io.k8s.api.storage.v1beta1.VolumeAttachmentSource", schema);
}

