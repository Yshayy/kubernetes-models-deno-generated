import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "lastTransitionTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "message": {
      "type": "string"
    },
    "reason": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "type": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.api.flowcontrol.v1alpha1.FlowSchemaCondition", schema);
}

