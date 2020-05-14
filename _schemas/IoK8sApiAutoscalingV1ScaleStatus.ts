import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "replicas": {
      "format": "int32",
      "type": "integer"
    },
    "selector": {
      "type": "string"
    }
  },
  "required": [
    "replicas"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.autoscaling.v1.ScaleStatus", schema);
}

