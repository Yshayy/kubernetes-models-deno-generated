import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1LimitResponse } from "./IoK8sApiFlowcontrolV1alpha1LimitResponse.ts";
const schema: object = {
  "properties": {
    "assuredConcurrencyShares": {
      "format": "int32",
      "type": "integer"
    },
    "limitResponse": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.LimitResponse#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiFlowcontrolV1alpha1LimitResponse();
register("io.k8s.api.flowcontrol.v1alpha1.LimitedPriorityLevelConfiguration", schema);
}

