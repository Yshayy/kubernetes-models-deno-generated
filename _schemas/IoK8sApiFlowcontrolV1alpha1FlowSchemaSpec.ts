import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod } from "./IoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference } from "./IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects } from "./IoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects.ts";
const schema: object = {
  "properties": {
    "distinguisherMethod": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.FlowDistinguisherMethod#"
    },
    "matchingPrecedence": {
      "format": "int32",
      "type": "integer"
    },
    "priorityLevelConfiguration": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationReference#"
    },
    "rules": {
      "items": {
        "$ref": "io.k8s.api.flowcontrol.v1alpha1.PolicyRulesWithSubjects#"
      },
      "type": "array"
    }
  },
  "required": [
    "priorityLevelConfiguration"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiFlowcontrolV1alpha1FlowDistinguisherMethod();
IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationReference();
IoK8sApiFlowcontrolV1alpha1PolicyRulesWithSubjects();
register("io.k8s.api.flowcontrol.v1alpha1.FlowSchemaSpec", schema);
}

