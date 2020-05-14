import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";
const schema: object = {
  "properties": {
    "hostname": {
      "type": "string"
    },
    "ip": {
      "type": "string"
    },
    "nodeName": {
      "type": "string"
    },
    "targetRef": {
      "$ref": "io.k8s.api.core.v1.ObjectReference#"
    }
  },
  "required": [
    "ip"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ObjectReference();
register("io.k8s.api.core.v1.EndpointAddress", schema);
}

