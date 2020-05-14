import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceCondition } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceCondition.ts";
const schema: object = {
  "properties": {
    "conditions": {
      "items": {
        "$ref": "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceCondition#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceCondition();
register("io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceStatus", schema);
}

