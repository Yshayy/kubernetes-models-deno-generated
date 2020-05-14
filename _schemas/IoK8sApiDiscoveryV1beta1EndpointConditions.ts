import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "ready": {
      "type": "boolean"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.discovery.v1beta1.EndpointConditions", schema);
}

