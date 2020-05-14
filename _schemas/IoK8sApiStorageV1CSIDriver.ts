import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiStorageV1CSIDriverSpec } from "./IoK8sApiStorageV1CSIDriverSpec.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "storage.k8s.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "CSIDriver"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.storage.v1.CSIDriverSpec#"
    }
  },
  "required": [
    "spec",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiStorageV1CSIDriverSpec();
register("io.k8s.api.storage.v1.CSIDriver", schema);
}

