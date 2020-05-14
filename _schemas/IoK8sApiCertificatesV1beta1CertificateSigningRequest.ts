import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { addSchema as IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec.ts";

import { addSchema as IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "certificates.k8s.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "CertificateSigningRequest"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "$ref": "io.k8s.api.certificates.v1beta1.CertificateSigningRequestSpec#"
    },
    "status": {
      "$ref": "io.k8s.api.certificates.v1beta1.CertificateSigningRequestStatus#"
    }
  },
  "type": "object",
  "required": [
    "apiVersion",
    "kind"
  ]
};

export function addSchema() {
IoK8sApimachineryPkgApisMetaV1ObjectMeta();
IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec();
IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus();
register("io.k8s.api.certificates.v1beta1.CertificateSigningRequest", schema);
}

