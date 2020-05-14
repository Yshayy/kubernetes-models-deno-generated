import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "name": {
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.flowcontrol.v1alpha1.GroupSubject", schema);
}

