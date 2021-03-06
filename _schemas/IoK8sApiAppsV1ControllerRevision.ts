import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgRuntimeRawExtension } from "./IoK8sApimachineryPkgRuntimeRawExtension.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "apps/v1"
      ]
    },
    "data": {
      "$ref": "io.k8s.apimachinery.pkg.runtime.RawExtension#"
    },
    "kind": {
      "type": "string",
      "enum": [
        "ControllerRevision"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "revision": {
      "format": "int64",
      "type": "integer"
    }
  },
  "required": [
    "revision",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgRuntimeRawExtension();
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
register("io.k8s.api.apps.v1.ControllerRevision", schema);
}

