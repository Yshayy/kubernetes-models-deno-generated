import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry } from "./IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1OwnerReference } from "./IoK8sApimachineryPkgApisMetaV1OwnerReference.ts";
const schema: object = {
  "properties": {
    "annotations": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "clusterName": {
      "type": "string"
    },
    "creationTimestamp": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "deletionGracePeriodSeconds": {
      "format": "int64",
      "type": "integer"
    },
    "deletionTimestamp": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "finalizers": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "generateName": {
      "type": "string"
    },
    "generation": {
      "format": "int64",
      "type": "integer"
    },
    "labels": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "managedFields": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry#"
      },
      "type": "array"
    },
    "name": {
      "type": "string"
    },
    "namespace": {
      "type": "string"
    },
    "ownerReferences": {
      "items": {
        "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference#"
      },
      "type": "array"
    },
    "resourceVersion": {
      "type": "string"
    },
    "selfLink": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1Time();
IoK8sApimachineryPkgApisMetaV1ManagedFieldsEntry();
IoK8sApimachineryPkgApisMetaV1OwnerReference();
register("io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta", schema);
}

