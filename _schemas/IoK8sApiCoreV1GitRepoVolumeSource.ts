import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "directory": {
      "type": "string"
    },
    "repository": {
      "type": "string"
    },
    "revision": {
      "type": "string"
    }
  },
  "required": [
    "repository"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.GitRepoVolumeSource", schema);
}

