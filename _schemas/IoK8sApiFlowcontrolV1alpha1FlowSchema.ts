import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1FlowSchemaSpec } from "./IoK8sApiFlowcontrolV1alpha1FlowSchemaSpec.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1FlowSchemaStatus } from "./IoK8sApiFlowcontrolV1alpha1FlowSchemaStatus.ts";
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
        "FlowSchema"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.FlowSchemaSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.FlowSchemaStatus#"
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
IoK8sApiFlowcontrolV1alpha1FlowSchemaSpec();
IoK8sApiFlowcontrolV1alpha1FlowSchemaStatus();
register("io.k8s.api.flowcontrol.v1alpha1.FlowSchema", schema);
}

