import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement } from "./IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement.ts";
const schema: object = {
  "properties": {
    "matchExpressions": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement#"
      },
      "type": "array"
    },
    "matchLabels": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement();
register("io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector", schema);
}

