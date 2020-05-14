import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1MicroTime } from "./IoK8sApimachineryPkgApisMetaV1MicroTime.ts";
const schema: object = {
  "properties": {
    "count": {
      "format": "int32",
      "type": "integer"
    },
    "lastObservedTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"
    },
    "state": {
      "type": "string"
    }
  },
  "required": [
    "count",
    "lastObservedTime",
    "state"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1MicroTime();
register("io.k8s.api.events.v1beta1.EventSeries", schema);
}

