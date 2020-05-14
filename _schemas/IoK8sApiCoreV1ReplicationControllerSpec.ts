import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1PodTemplateSpec } from "./IoK8sApiCoreV1PodTemplateSpec.ts";
const schema: object = {
  "properties": {
    "minReadySeconds": {
      "format": "int32",
      "type": "integer"
    },
    "replicas": {
      "format": "int32",
      "type": "integer"
    },
    "selector": {
      "additionalProperties": {
        "type": "string"
      },
      "type": "object"
    },
    "template": {
      "$ref": "io.k8s.api.core.v1.PodTemplateSpec#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1PodTemplateSpec();
register("io.k8s.api.core.v1.ReplicationControllerSpec", schema);
}

