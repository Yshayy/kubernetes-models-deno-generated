import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiExtensionsV1beta1Ingress } from "./IoK8sApiExtensionsV1beta1Ingress.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "extensions/v1beta1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.extensions.v1beta1.Ingress#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "IngressList"
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
IoK8sApiExtensionsV1beta1Ingress();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.extensions.v1beta1.IngressList", schema);
}

