import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1QueuingConfiguration } from "./IoK8sApiFlowcontrolV1alpha1QueuingConfiguration.ts";
const schema: object = {
  "properties": {
    "queuing": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.QueuingConfiguration#"
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
IoK8sApiFlowcontrolV1alpha1QueuingConfiguration();
register("io.k8s.api.flowcontrol.v1alpha1.LimitResponse", schema);
}

