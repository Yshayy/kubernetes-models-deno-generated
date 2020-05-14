
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition.ts";

export interface IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition {
/**
 * timestamp for the last update to this condition
 */
"lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * human readable message with details about the request state
 */
"message"?: string;
/**
 * brief reason for the request state
 */
"reason"?: string;
/**
 * request approval state, currently Approved or Denied.
 */
"type": string;
}

export class IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition extends Model<IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition> implements IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition {

"lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"reason"?: string;

"type": string;
}

Model.setSchema(IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition, "io.k8s.api.certificates.v1beta1.CertificateSigningRequestCondition", addSchema);

export {
  IIoK8sApiCertificatesV1beta1CertificateSigningRequestCondition as ICertificateSigningRequestCondition,
  IoK8sApiCertificatesV1beta1CertificateSigningRequestCondition as CertificateSigningRequestCondition
};
