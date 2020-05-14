
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCertificatesV1beta1CertificateSigningRequestSpec } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequestSpec.ts";

import { IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequestStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCertificatesV1beta1CertificateSigningRequest.ts";

/**
 * Describes a certificate signing request
 */
export interface IIoK8sApiCertificatesV1beta1CertificateSigningRequest {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "certificates.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CertificateSigningRequest";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * The certificate request itself and any additional information.
 */
"spec"?: IIoK8sApiCertificatesV1beta1CertificateSigningRequestSpec;
/**
 * Derived information about the request.
 */
"status"?: IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus;
}

/**
 * Describes a certificate signing request
 */
export class IoK8sApiCertificatesV1beta1CertificateSigningRequest extends Model<IIoK8sApiCertificatesV1beta1CertificateSigningRequest> implements IIoK8sApiCertificatesV1beta1CertificateSigningRequest {

apiVersion: IIoK8sApiCertificatesV1beta1CertificateSigningRequest["apiVersion"] = IoK8sApiCertificatesV1beta1CertificateSigningRequest["apiVersion"];

kind: IIoK8sApiCertificatesV1beta1CertificateSigningRequest["kind"] = IoK8sApiCertificatesV1beta1CertificateSigningRequest["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCertificatesV1beta1CertificateSigningRequestSpec;

"status"?: IIoK8sApiCertificatesV1beta1CertificateSigningRequestStatus;

static apiVersion: IIoK8sApiCertificatesV1beta1CertificateSigningRequest["apiVersion"] = "certificates.k8s.io/v1beta1";
static kind: IIoK8sApiCertificatesV1beta1CertificateSigningRequest["kind"] = "CertificateSigningRequest";
}

Model.setSchema(IoK8sApiCertificatesV1beta1CertificateSigningRequest, "io.k8s.api.certificates.v1beta1.CertificateSigningRequest", addSchema);

export {
  IIoK8sApiCertificatesV1beta1CertificateSigningRequest as ICertificateSigningRequest,
  IoK8sApiCertificatesV1beta1CertificateSigningRequest as CertificateSigningRequest
};
