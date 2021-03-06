import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCertificatesV1beta1CertificateSigningRequest } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequest.ts";

import { addSchema as IoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";
const schema: object = {
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "certificates.k8s.io/v1beta1"
      ]
    },
    "items": {
      "items": {
        "$ref": "io.k8s.api.certificates.v1beta1.CertificateSigningRequest#"
      },
      "type": "array"
    },
    "kind": {
      "type": "string",
      "enum": [
        "CertificateSigningRequestList"
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
IoK8sApiCertificatesV1beta1CertificateSigningRequest();
IoK8sApimachineryPkgApisMetaV1ListMeta();
register("io.k8s.api.certificates.v1beta1.CertificateSigningRequestList", schema);
}

