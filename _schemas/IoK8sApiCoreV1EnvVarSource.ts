import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ConfigMapKeySelector } from "./IoK8sApiCoreV1ConfigMapKeySelector.ts";

import { addSchema as IoK8sApiCoreV1ObjectFieldSelector } from "./IoK8sApiCoreV1ObjectFieldSelector.ts";

import { addSchema as IoK8sApiCoreV1ResourceFieldSelector } from "./IoK8sApiCoreV1ResourceFieldSelector.ts";

import { addSchema as IoK8sApiCoreV1SecretKeySelector } from "./IoK8sApiCoreV1SecretKeySelector.ts";
const schema: object = {
  "properties": {
    "configMapKeyRef": {
      "$ref": "io.k8s.api.core.v1.ConfigMapKeySelector#"
    },
    "fieldRef": {
      "$ref": "io.k8s.api.core.v1.ObjectFieldSelector#"
    },
    "resourceFieldRef": {
      "$ref": "io.k8s.api.core.v1.ResourceFieldSelector#"
    },
    "secretKeyRef": {
      "$ref": "io.k8s.api.core.v1.SecretKeySelector#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ConfigMapKeySelector();
IoK8sApiCoreV1ObjectFieldSelector();
IoK8sApiCoreV1ResourceFieldSelector();
IoK8sApiCoreV1SecretKeySelector();
register("io.k8s.api.core.v1.EnvVarSource", schema);
}

