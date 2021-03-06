import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec.ts";

import { addSchema as IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "apiregistration.k8s.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "APIService"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceSpec#"
    },
    "status": {
      "$ref": "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceStatus#"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpec();
IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceStatus();
register("io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService", schema);
}

