import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";
const schema: object = {
  "properties": {
    "medium": {
      "type": "string"
    },
    "sizeLimit": {
      "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApiResourceQuantity();
register("io.k8s.api.core.v1.EmptyDirVolumeSource", schema);
}

