import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgRuntimeRawExtension } from "./IoK8sApimachineryPkgRuntimeRawExtension.ts";
const schema: object = {
  "properties": {
    "object": {
      "$ref": "io.k8s.apimachinery.pkg.runtime.RawExtension#"
    },
    "type": {
      "type": "string"
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "WatchEvent"
      ]
    }
  },
  "required": [
    "type",
    "object",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgRuntimeRawExtension();
register("io.k8s.apimachinery.pkg.apis.meta.v1.WatchEvent", schema);
}

