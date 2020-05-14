import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "endpoints": {
      "type": "string"
    },
    "endpointsNamespace": {
      "type": "string"
    },
    "path": {
      "type": "string"
    },
    "readOnly": {
      "type": "boolean"
    }
  },
  "required": [
    "endpoints",
    "path"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.GlusterfsPersistentVolumeSource", schema);
}

