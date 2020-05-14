import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "name": {
      "type": "string"
    },
    "namespace": {
      "type": "string"
    }
  },
  "required": [
    "namespace",
    "name"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.flowcontrol.v1alpha1.ServiceAccountSubject", schema);
}

