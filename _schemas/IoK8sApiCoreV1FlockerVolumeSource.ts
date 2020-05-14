import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "datasetName": {
      "type": "string"
    },
    "datasetUUID": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.FlockerVolumeSource", schema);
}

