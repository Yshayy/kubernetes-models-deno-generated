import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1FlowSchemaCondition } from "./IoK8sApiFlowcontrolV1alpha1FlowSchemaCondition.ts";
const schema: object = {
  "properties": {
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.flowcontrol.v1alpha1.FlowSchemaCondition#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiFlowcontrolV1alpha1FlowSchemaCondition();
register("io.k8s.api.flowcontrol.v1alpha1.FlowSchemaStatus", schema);
}

