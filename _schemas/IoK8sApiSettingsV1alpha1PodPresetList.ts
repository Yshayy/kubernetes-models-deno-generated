import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiSettingsV1alpha1PodPreset } from "./IoK8sApiSettingsV1alpha1PodPreset.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "settings.k8s.io/v1alpha1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.settings.v1alpha1.PodPreset#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "PodPresetList"
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
IoK8sApiSettingsV1alpha1PodPreset();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.settings.v1alpha1.PodPresetList", schema);
}
