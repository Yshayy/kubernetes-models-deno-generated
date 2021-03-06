import { register } from "../__include/validate/src/index.ts";
const schema: object = {
  "properties": {
    "extra": {
      "additionalProperties": {
        "items": {
          "type": "string"
        },
        "type": "array"
      },
      "type": "object"
    },
    "groups": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "request": {
      "format": "byte",
      "type": "string"
    },
    "signerName": {
      "type": "string"
    },
    "uid": {
      "type": "string"
    },
    "usages": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "username": {
      "type": "string"
    }
  },
  "required": [
    "request"
  ],
  "type": "object"
};

export function addSchema() {
register("io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec", schema);
}

