import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "burst": {
      "format": "int64",
      "type": "integer"
    },
    "qps": {
      "format": "int64",
      "type": "integer"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.auditregistration.v1alpha1.WebhookThrottleConfig", schema);
}

