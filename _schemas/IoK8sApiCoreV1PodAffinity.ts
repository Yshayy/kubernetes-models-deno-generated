import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1WeightedPodAffinityTerm } from "./IoK8sApiCoreV1WeightedPodAffinityTerm.ts";

import { addSchema as IoK8sApiCoreV1PodAffinityTerm } from "./IoK8sApiCoreV1PodAffinityTerm.ts";
const schema: object = {
  "properties": {
    "preferredDuringSchedulingIgnoredDuringExecution": {
      "items": {
        "$ref": "io.k8s.api.core.v1.WeightedPodAffinityTerm#"
      },
      "type": "array"
    },
    "requiredDuringSchedulingIgnoredDuringExecution": {
      "items": {
        "$ref": "io.k8s.api.core.v1.PodAffinityTerm#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1WeightedPodAffinityTerm();
IoK8sApiCoreV1PodAffinityTerm();
register("io.k8s.api.core.v1.PodAffinity", schema);
}

