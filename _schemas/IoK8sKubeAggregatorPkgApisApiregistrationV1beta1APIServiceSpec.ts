import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference } from "./IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference.ts";
const schema: object = {
  "properties": {
    "caBundle": {
      "format": "byte",
      "type": "string"
    },
    "group": {
      "type": "string"
    },
    "groupPriorityMinimum": {
      "format": "int32",
      "type": "integer"
    },
    "insecureSkipTLSVerify": {
      "type": "boolean"
    },
    "service": {
      "$ref": "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.ServiceReference#"
    },
    "version": {
      "type": "string"
    },
    "versionPriority": {
      "format": "int32",
      "type": "integer"
    }
  },
  "required": [
    "groupPriorityMinimum",
    "versionPriority"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sKubeAggregatorPkgApisApiregistrationV1beta1ServiceReference();
register("io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceSpec", schema);
}

