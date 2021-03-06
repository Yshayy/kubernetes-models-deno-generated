import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "appProtocol": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "port": {
      "format": "int32",
      "type": "integer"
    },
    "protocol": {
      "type": "string"
    }
  },
  "required": [
    "port"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.EndpointPort", schema);
}

