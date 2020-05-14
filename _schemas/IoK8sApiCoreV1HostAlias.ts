import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "hostnames": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "ip": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.HostAlias", schema);
}

