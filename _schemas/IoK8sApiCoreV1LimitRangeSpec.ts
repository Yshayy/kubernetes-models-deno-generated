import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1LimitRangeItem } from "./IoK8sApiCoreV1LimitRangeItem.ts";
const schema: object = {
  "properties": {
    "limits": {
      "items": {
        "$ref": "io.k8s.api.core.v1.LimitRangeItem#"
      },
      "type": "array"
    }
  },
  "required": [
    "limits"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1LimitRangeItem();
register("io.k8s.api.core.v1.LimitRangeSpec", schema);
}

