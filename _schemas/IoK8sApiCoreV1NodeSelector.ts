import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1NodeSelectorTerm } from "./IoK8sApiCoreV1NodeSelectorTerm.ts";
const schema: object = {
  "properties": {
    "nodeSelectorTerms": {
      "items": {
        "$ref": "io.k8s.api.core.v1.NodeSelectorTerm#"
      },
      "type": "array"
    }
  },
  "required": [
    "nodeSelectorTerms"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1NodeSelectorTerm();
register("io.k8s.api.core.v1.NodeSelector", schema);
}

