import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "mountPath": {
      "type": "string"
    },
    "mountPropagation": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    },
    "subPath": {
      "type": "string"
    },
    "subPathExpr": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "mountPath"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.VolumeMount", schema);
}

