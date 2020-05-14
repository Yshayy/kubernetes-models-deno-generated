import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationCondition } from "./IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationCondition.ts";
const schema: object = {
  "properties": {
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationCondition#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationCondition();
register("io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationStatus", schema);
}

