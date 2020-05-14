import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";
const schema: object = {
  "properties": {
    "maxUnavailable": {
      "$ref": "io.k8s.apimachinery.pkg.util.intstr.IntOrString#"
    },
    "minAvailable": {
      "$ref": "io.k8s.apimachinery.pkg.util.intstr.IntOrString#"
    },
    "selector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgUtilIntstrIntOrString();
IoK8sApimachineryPkgApisMetaV1LabelSelector();
register("io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec", schema);
}

