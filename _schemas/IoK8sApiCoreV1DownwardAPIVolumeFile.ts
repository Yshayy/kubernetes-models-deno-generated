import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ObjectFieldSelector } from "./IoK8sApiCoreV1ObjectFieldSelector.ts";

import { addSchema as IoK8sApiCoreV1ResourceFieldSelector } from "./IoK8sApiCoreV1ResourceFieldSelector.ts";
const schema: object = {
  "properties": {
    "fieldRef": {
      "$ref": "io.k8s.api.core.v1.ObjectFieldSelector#"
    },
    "mode": {
      "format": "int32",
      "type": "integer"
    },
    "path": {
      "type": "string"
    },
    "resourceFieldRef": {
      "$ref": "io.k8s.api.core.v1.ResourceFieldSelector#"
    }
  },
  "required": [
    "path"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ObjectFieldSelector();
IoK8sApiCoreV1ResourceFieldSelector();
register("io.k8s.api.core.v1.DownwardAPIVolumeFile", schema);
}

