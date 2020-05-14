import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiEventsV1beta1Event } from "./IoK8sApiEventsV1beta1Event.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "events.k8s.io/v1beta1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.events.v1beta1.Event#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "EventList"
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
IoK8sApiEventsV1beta1Event();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.events.v1beta1.EventList", schema);
}

