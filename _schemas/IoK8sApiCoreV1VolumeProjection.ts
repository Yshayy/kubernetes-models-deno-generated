import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ConfigMapProjection } from "./IoK8sApiCoreV1ConfigMapProjection.ts";

import { addSchema as IoK8sApiCoreV1DownwardAPIProjection } from "./IoK8sApiCoreV1DownwardAPIProjection.ts";

import { addSchema as IoK8sApiCoreV1SecretProjection } from "./IoK8sApiCoreV1SecretProjection.ts";

import { addSchema as IoK8sApiCoreV1ServiceAccountTokenProjection } from "./IoK8sApiCoreV1ServiceAccountTokenProjection.ts";
const schema: object = {
  "properties": {
    "configMap": {
      "$ref": "io.k8s.api.core.v1.ConfigMapProjection#"
    },
    "downwardAPI": {
      "$ref": "io.k8s.api.core.v1.DownwardAPIProjection#"
    },
    "secret": {
      "$ref": "io.k8s.api.core.v1.SecretProjection#"
    },
    "serviceAccountToken": {
      "$ref": "io.k8s.api.core.v1.ServiceAccountTokenProjection#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ConfigMapProjection();
IoK8sApiCoreV1DownwardAPIProjection();
IoK8sApiCoreV1SecretProjection();
IoK8sApiCoreV1ServiceAccountTokenProjection();
register("io.k8s.api.core.v1.VolumeProjection", schema);
}

