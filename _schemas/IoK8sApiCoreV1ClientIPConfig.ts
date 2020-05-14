import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "timeoutSeconds": {
      "format": "int32",
      "type": "integer"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.ClientIPConfig", schema);
}

