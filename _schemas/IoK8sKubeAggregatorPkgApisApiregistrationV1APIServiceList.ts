import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sKubeAggregatorPkgApisApiregistrationV1APIService } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1APIService.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "apiregistration.k8s.io/v1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "APIServiceList"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#"
    }
  },
  "required": [
    "items",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sKubeAggregatorPkgApisApiregistrationV1APIService();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList", schema);
}

