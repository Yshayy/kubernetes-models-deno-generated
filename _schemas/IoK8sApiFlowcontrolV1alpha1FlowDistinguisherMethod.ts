import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "type": {
      "type": "string"
    }
  },
  "required": [
    "type"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.flowcontrol.v1alpha1.FlowDistinguisherMethod", schema);
}

