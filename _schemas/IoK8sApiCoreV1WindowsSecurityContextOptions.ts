import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "gmsaCredentialSpec": {
      "type": "string"
    },
    "gmsaCredentialSpecName": {
      "type": "string"
    },
    "runAsUserName": {
      "type": "string"
    }
  },
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.core.v1.WindowsSecurityContextOptions", schema);
}

