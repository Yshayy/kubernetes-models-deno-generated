import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgUtilIntstrIntOrString } from "./IoK8sApimachineryPkgUtilIntstrIntOrString.ts";
const schema: object = {
  "properties": {
    "maxSurge": {
      "$ref": "io.k8s.apimachinery.pkg.util.intstr.IntOrString#"
    },
    "maxUnavailable": {
      "$ref": "io.k8s.apimachinery.pkg.util.intstr.IntOrString#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgUtilIntstrIntOrString();
register("io.k8s.api.apps.v1.RollingUpdateDeployment", schema);
}

