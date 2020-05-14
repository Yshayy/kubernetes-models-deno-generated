import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "count": {
      "format": "int32",
      "type": "integer"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.storage.v1beta1.VolumeNodeResources", schema);
}

