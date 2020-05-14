import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "message": {
      "type": "string"
    },
    "time": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.api.storage.v1.VolumeError", schema);
}

