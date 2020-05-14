import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "readOnly": {
      "type": "boolean"
    },
    "secretName": {
      "type": "string"
    },
    "secretNamespace": {
      "type": "string"
    },
    "shareName": {
      "type": "string"
    }
  },
  "required": [
    "secretName",
    "shareName"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.AzureFilePersistentVolumeSource", schema);
}

