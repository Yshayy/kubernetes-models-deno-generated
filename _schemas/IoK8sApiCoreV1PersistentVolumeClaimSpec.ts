import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1TypedLocalObjectReference } from "./IoK8sApiCoreV1TypedLocalObjectReference.ts";

import { addSchema as IoK8sApiCoreV1ResourceRequirements } from "./IoK8sApiCoreV1ResourceRequirements.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";
const schema: object = {
  "properties": {
    "accessModes": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "dataSource": {
      "$ref": "io.k8s.api.core.v1.TypedLocalObjectReference#"
    },
    "resources": {
      "$ref": "io.k8s.api.core.v1.ResourceRequirements#"
    },
    "selector": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector#"
    },
    "storageClassName": {
      "type": "string"
    },
    "volumeMode": {
      "type": "string"
    },
    "volumeName": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1TypedLocalObjectReference();
IoK8sApiCoreV1ResourceRequirements();
IoK8sApimachineryPkgApisMetaV1LabelSelector();
register("io.k8s.api.core.v1.PersistentVolumeClaimSpec", schema);
}

