import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiStorageV1beta1VolumeNodeResources } from "./IoK8sApiStorageV1beta1VolumeNodeResources.ts";
const schema: object = {
  "properties": {
    "allocatable": {
      "$ref": "io.k8s.api.storage.v1beta1.VolumeNodeResources#"
    },
    "name": {
      "type": "string"
    },
    "nodeID": {
      "type": "string"
    },
    "topologyKeys": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "required": [
    "name",
    "nodeID"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiStorageV1beta1VolumeNodeResources();
register("io.k8s.api.storage.v1beta1.CSINodeDriver", schema);
}

