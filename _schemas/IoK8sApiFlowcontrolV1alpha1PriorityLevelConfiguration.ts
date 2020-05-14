import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec } from "./IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus } from "./IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "flowcontrol.apiserver.k8s.io/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "PriorityLevelConfiguration"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfigurationStatus#"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationSpec();
IoK8sApiFlowcontrolV1alpha1PriorityLevelConfigurationStatus();
register("io.k8s.api.flowcontrol.v1alpha1.PriorityLevelConfiguration", schema);
}

