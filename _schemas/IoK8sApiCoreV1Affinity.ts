import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1NodeAffinity } from "./IoK8sApiCoreV1NodeAffinity.ts";

import { addSchema as IoK8sApiCoreV1PodAffinity } from "./IoK8sApiCoreV1PodAffinity.ts";

import { addSchema as IoK8sApiCoreV1PodAntiAffinity } from "./IoK8sApiCoreV1PodAntiAffinity.ts";
const schema: object = {
  "properties": {
    "nodeAffinity": {
      "$ref": "io.k8s.api.core.v1.NodeAffinity#"
    },
    "podAffinity": {
      "$ref": "io.k8s.api.core.v1.PodAffinity#"
    },
    "podAntiAffinity": {
      "$ref": "io.k8s.api.core.v1.PodAntiAffinity#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1NodeAffinity();
IoK8sApiCoreV1PodAffinity();
IoK8sApiCoreV1PodAntiAffinity();
register("io.k8s.api.core.v1.Affinity", schema);
}

