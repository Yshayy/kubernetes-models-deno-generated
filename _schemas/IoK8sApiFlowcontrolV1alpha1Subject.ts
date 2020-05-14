import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1GroupSubject } from "./IoK8sApiFlowcontrolV1alpha1GroupSubject.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject } from "./IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject.ts";

import { addSchema as IoK8sApiFlowcontrolV1alpha1UserSubject } from "./IoK8sApiFlowcontrolV1alpha1UserSubject.ts";
const schema: object = {
  "properties": {
    "group": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.GroupSubject#"
    },
    "kind": {
      "type": "string"
    },
    "serviceAccount": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.ServiceAccountSubject#"
    },
    "user": {
      "$ref": "io.k8s.api.flowcontrol.v1alpha1.UserSubject#"
    }
  },
  "required": [
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiFlowcontrolV1alpha1GroupSubject();
IoK8sApiFlowcontrolV1alpha1ServiceAccountSubject();
IoK8sApiFlowcontrolV1alpha1UserSubject();
register("io.k8s.api.flowcontrol.v1alpha1.Subject", schema);
}

