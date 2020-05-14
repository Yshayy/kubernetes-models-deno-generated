import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule } from "./IoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1ResourcePolicyRule } from "./IoK8sApiFlowcontrolV1alpha1ResourcePolicyRule.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1Subject } from "./IoK8sApiFlowcontrolV1alpha1Subject.ts";
const schema: object = {
  "properties": {
    "nonResourceRules": {
      "items": {
        "$ref": "io.k8s.api.flowcontrol.v1alpha1.NonResourcePolicyRule#"
      },
      "type": "array"
    },
    "resourceRules": {
      "items": {
        "$ref": "io.k8s.api.flowcontrol.v1alpha1.ResourcePolicyRule#"
      },
      "type": "array"
    },
    "subjects": {
      "items": {
        "$ref": "io.k8s.api.flowcontrol.v1alpha1.Subject#"
      },
      "type": "array"
    }
  },
  "required": [
    "subjects"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiFlowcontrolV1alpha1NonResourcePolicyRule();
IoK8sApiFlowcontrolV1alpha1ResourcePolicyRule();
IoK8sApiFlowcontrolV1alpha1Subject();
register("io.k8s.api.flowcontrol.v1alpha1.PolicyRulesWithSubjects", schema);
}

