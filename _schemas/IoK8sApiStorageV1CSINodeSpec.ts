import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiStorageV1CSINodeDriver } from "./IoK8sApiStorageV1CSINodeDriver.ts";
const schema: object = {
  "properties": {
    "drivers": {
      "items": {
        "$ref": "io.k8s.api.storage.v1.CSINodeDriver#"
      },
      "type": "array"
    }
  },
  "required": [
    "drivers"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiStorageV1CSINodeDriver();
register("io.k8s.api.storage.v1.CSINodeSpec", schema);
}

