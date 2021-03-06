import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { addSchema as IoK8sApiCoreV1EventSource } from "./IoK8sApiCoreV1EventSource.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1MicroTime } from "./IoK8sApimachineryPkgApisMetaV1MicroTime.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { addSchema as IoK8sApiEventsV1beta1EventSeries } from "./IoK8sApiEventsV1beta1EventSeries.ts";
const schema: object = {
  "properties": {
    "action": {
      "type": "string"
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "events.k8s.io/v1beta1"
      ]
    },
    "deprecatedCount": {
      "format": "int32",
      "type": "integer"
    },
    "deprecatedFirstTimestamp": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "deprecatedLastTimestamp": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.Time#"
    },
    "deprecatedSource": {
      "$ref": "io.k8s.api.core.v1.EventSource#"
    },
    "eventTime": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime#"
    },
    "kind": {
      "type": "string",
      "enum": [
        "Event"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "note": {
      "type": "string"
    },
    "reason": {
      "type": "string"
    },
    "regarding": {
      "$ref": "io.k8s.api.core.v1.ObjectReference#"
    },
    "related": {
      "$ref": "io.k8s.api.core.v1.ObjectReference#"
    },
    "reportingController": {
      "type": "string"
    },
    "reportingInstance": {
      "type": "string"
    },
    "series": {
      "$ref": "io.k8s.api.events.v1beta1.EventSeries#"
    },
    "type": {
      "type": "string"
    }
  },
  "required": [
    "eventTime",
    "apiVersion",
    "kind"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1Time();
IoK8sApiCoreV1EventSource();
IoK8sApimachineryPkgApisMetaV1MicroTime();
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiCoreV1ObjectReference();
IoK8sApiEventsV1beta1EventSeries();
register("io.k8s.api.events.v1beta1.Event", schema);
}

