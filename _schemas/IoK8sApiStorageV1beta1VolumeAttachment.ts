import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiStorageV1beta1VolumeAttachmentSpec } from "./IoK8sApiStorageV1beta1VolumeAttachmentSpec.ts";

import { addSchema as IoK8sApiStorageV1beta1VolumeAttachmentStatus } from "./IoK8sApiStorageV1beta1VolumeAttachmentStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "storage.k8s.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "VolumeAttachment"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.storage.v1beta1.VolumeAttachmentSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.storage.v1beta1.VolumeAttachmentStatus#"
    }
  },
  "required": [
    "spec",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiStorageV1beta1VolumeAttachmentSpec();
IoK8sApiStorageV1beta1VolumeAttachmentStatus();
register("io.k8s.api.storage.v1beta1.VolumeAttachment", schema);
}

