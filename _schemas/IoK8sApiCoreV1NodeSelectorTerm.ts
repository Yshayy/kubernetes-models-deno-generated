import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1NodeSelectorRequirement } from "./IoK8sApiCoreV1NodeSelectorRequirement.ts";
const schema: object = {
  "properties": {
    "matchExpressions": {
      "items": {
        "$ref": "io.k8s.api.core.v1.NodeSelectorRequirement#"
      },
      "type": "array"
    },
    "matchFields": {
      "items": {
        "$ref": "io.k8s.api.core.v1.NodeSelectorRequirement#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1NodeSelectorRequirement();
register("io.k8s.api.core.v1.NodeSelectorTerm", schema);
}

