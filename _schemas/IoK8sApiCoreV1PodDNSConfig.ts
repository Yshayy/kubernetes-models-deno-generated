import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1PodDNSConfigOption } from "./IoK8sApiCoreV1PodDNSConfigOption.ts";
const schema: object = {
  "properties": {
    "nameservers": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "options": {
      "items": {
        "$ref": "io.k8s.api.core.v1.PodDNSConfigOption#"
      },
      "type": "array"
    },
    "searches": {
      "items": {
        "type": "string"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1PodDNSConfigOption();
register("io.k8s.api.core.v1.PodDNSConfig", schema);
}

