import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition.ts";
const schema: object = {
  "properties": {
    "conditions": {
      "items": {
        "$ref": "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceCondition#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceCondition();
register("io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceStatus", schema);
}

