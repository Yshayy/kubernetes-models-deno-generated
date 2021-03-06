import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1FlowSchema } from "./IoK8sApiFlowcontrolV1alpha1FlowSchema.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "flowcontrol.apiserver.k8s.io/v1alpha1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.flowcontrol.v1alpha1.FlowSchema#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "FlowSchemaList"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta#"
    }
  },
  "required": [
    "items",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiFlowcontrolV1alpha1FlowSchema();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.flowcontrol.v1alpha1.FlowSchemaList", schema);
}

