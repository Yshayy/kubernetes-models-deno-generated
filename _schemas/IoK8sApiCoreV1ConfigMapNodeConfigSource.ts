import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "kubeletConfigKey": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "namespace": {
      "type": "string"
    },
    "resourceVersion": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "required": [
    "namespace",
    "name",
    "kubeletConfigKey"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.ConfigMapNodeConfigSource", schema);
}

