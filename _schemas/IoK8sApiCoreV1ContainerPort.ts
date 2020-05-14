import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "containerPort": {
      "format": "int32",
      "type": "integer"
    },
    "hostIP": {
      "type": "string"
    },
    "hostPort": {
      "format": "int32",
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "protocol": {
      "type": "string"
    }
  },
  "required": [
    "containerPort"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.ContainerPort", schema);
}

