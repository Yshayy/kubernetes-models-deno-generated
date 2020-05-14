import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "handSize": {
      "format": "int32",
      "type": "integer"
    },
    "queueLengthLimit": {
      "format": "int32",
      "type": "integer"
    },
    "queues": {
      "format": "int32",
      "type": "integer"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.flowcontrol.v1alpha1.QueuingConfiguration", schema);
}

