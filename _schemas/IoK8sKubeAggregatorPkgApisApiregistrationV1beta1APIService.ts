import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec.ts";

import { addSchema as IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "apiregistration.k8s.io/v1beta1"
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
      "$ref": "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec#"
    },
    "status": {
      "$ref": "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceStatus#"
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
IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceSpec();
IoK8sKubeAggregatorPkgApisApiregistrationV1beta1APIServiceStatus();
register("io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService", schema);
}

