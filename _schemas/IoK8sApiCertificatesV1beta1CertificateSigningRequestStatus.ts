import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition.ts";
const schema: object = {
  "properties": {
    "certificate": {
      "format": "byte",
      "type": "string"
    },
    "conditions": {
      "items": {
        "$ref": "io.k8s.api.certificates.v1beta1.CertificateSigningRequestCondition#"
      },
      "type": "array"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition();
register("io.k8s.api.certificates.v1beta1.CertificateSigningRequestStatus", schema);
}

