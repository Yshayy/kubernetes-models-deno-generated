import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "active": {
      "items": {
        "$ref": "io.k8s.api.core.v1.ObjectReference#"
      },
      "type": "array"
    },
    "lastScheduleTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1ObjectReference();
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.api.batch.v1beta1.CronJobStatus", schema);
}

