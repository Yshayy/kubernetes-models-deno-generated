import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1LimitedPriorityLevelConfiguration } from "./IoK8sApiFlowcontrolV1alpha1LimitedPriorityLevelConfiguration.ts";
const schema: object = {
  "properties": {
    "limited": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.LimitedPriorityLevelConfiguration#"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "type"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiFlowcontrolV1alpha1LimitedPriorityLevelConfiguration();
register("io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationSpec", schema);
}

