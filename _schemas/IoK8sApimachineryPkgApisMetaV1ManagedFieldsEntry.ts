import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1FieldsV1 } from "./IoK8sApimachineryPkgApisMetaV1FieldsV1.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string"
    },
    "fieldsType": {
      "type": "string"
    },
    "fieldsV1": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1#"
    },
    "manager": {
      "type": "string"
    },
    "operation": {
      "type": "string"
    },
    "time": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1FieldsV1();
IoK8sApimachineryPkgApisMetaV1Time();
register("io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry", schema);
}

