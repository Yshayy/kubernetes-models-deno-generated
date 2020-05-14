import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "Port": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "Port"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.DaemonEndpoint", schema);
}

