import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1PodAffinityTerm } from "./IoK8sApiCoreV1PodAffinityTerm.ts";
const schema: object = {
  "properties": {
    "podAffinityTerm": {
      "$ref": "io.k8s.api.core.v1.PodAffinityTerm#"
    },
    "weight": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "weight",
    "podAffinityTerm"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1PodAffinityTerm();
register("io.k8s.api.core.v1.WeightedPodAffinityTerm", schema);
}

