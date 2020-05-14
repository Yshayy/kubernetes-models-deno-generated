import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "labelSelectorPath": {
      "type": "string"
    },
    "specReplicasPath": {
      "type": "string"
    },
    "statusReplicasPath": {
      "type": "string"
    }
  },
  "required": [
    "specReplicasPath",
    "statusReplicasPath"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceSubresourceScale", schema);
}

