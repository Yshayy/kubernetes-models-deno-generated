import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1MicroTime } from "./IoK8sApimachineryPkgApisMetaV1MicroTime.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { addSchema as IoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1EventSeries } from "./IoK8sApiCoreV1EventSeries.ts";

import { addSchema as IoK8sApiCoreV1EventSource } from "./IoK8sApiCoreV1EventSource.ts";
const schema: object = {
  "properties": {
    "action": {
      "type": "string"
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "v1"
      ]
    },
    "count": {
      "format": "int32",
      "type": "integer"
    },
    "eventTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"
    },
    "firstTimestamp": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "involvedObject": {
      "$ref": "io.k8s.api.core.v1.ObjectReference#"
    },
    "kind": {
      "type": "string",
      "enum": [
        "Event"
      ]
    },
    "lastTimestamp": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "message": {
      "type": "string"
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "reason": {
      "type": "string"
    },
    "related": {
      "$ref": "io.k8s.api.core.v1.ObjectReference#"
    },
    "reportingComponent": {
      "type": "string"
    },
    "reportingInstance": {
      "type": "string"
    },
    "series": {
      "$ref": "io.k8s.api.core.v1.EventSeries#"
    },
    "source": {
      "$ref": "io.k8s.api.core.v1.EventSource#"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "metadata",
    "involvedObject",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1MicroTime();
IoK8sApimachineryPkgApisMetaV1Time();
IoK8sApiCoreV1ObjectReference();
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiCoreV1EventSeries();
IoK8sApiCoreV1EventSource();
register("io.k8s.api.core.v1.Event", schema);
}

