import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "ip": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.PodIP", schema);
}

