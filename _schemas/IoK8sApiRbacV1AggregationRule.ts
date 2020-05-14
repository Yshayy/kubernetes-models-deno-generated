import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";
const schema: object = {
  "properties": {
    "clusterRoleSelectors": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1LabelSelector();
register("io.k8s.api.rbac.v1.AggregationRule", schema);
}

