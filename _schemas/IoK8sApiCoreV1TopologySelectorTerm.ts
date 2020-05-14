import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1TopologySelectorLabelRequirement } from "./IoK8sApiCoreV1TopologySelectorLabelRequirement.ts";
const schema: object = {
  "properties": {
    "matchLabelExpressions": {
      "items": {
        "$ref": "io.k8s.api.core.v1.TopologySelectorLabelRequirement#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1TopologySelectorLabelRequirement();
register("io.k8s.api.core.v1.TopologySelectorTerm", schema);
}

