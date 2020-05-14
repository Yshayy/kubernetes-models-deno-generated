
import { IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus.ts";

export interface IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus {
/**
 * If request was approved, the controller will place the issued certificate here.
 */
"certificate"?: string;
/**
 * Conditions applied to the request, such as approval or denial.
 */
"conditions"?: Array<IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition>;
}

export class IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus extends Model<IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus> implements IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus {

"certificate"?: string;

"conditions"?: Array<IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition>;
}

Model.setSchema(IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus, "io.k8s.api.certificates.v1beta1.CertificateSigningRequestStatus", addSchema);

export {
  IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus as ICertificateSigningRequestStatus,
  IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus as CertificateSigningRequestStatus
};
