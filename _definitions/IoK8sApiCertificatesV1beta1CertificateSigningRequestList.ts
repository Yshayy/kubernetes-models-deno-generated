
import { IIoK8sApiCertificatesV1beta1CertificateSigningRequest } from "./IoK8sApiCertificatesV1beta1CertificateSigningRequest.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCertificatesV1beta1CertificateSigningRequestList.ts";

export interface IIoK8sApiCertificatesV1beta1CertificateSigningRequestList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "certificates.k8s.io/v1beta1";
"items": Array<IIoK8sApiCertificatesV1beta1CertificateSigningRequest>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CertificateSigningRequestList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

export class IoK8sApiCertificatesV1beta1CertificateSigningRequestList extends Model<IIoK8sApiCertificatesV1beta1CertificateSigningRequestList> implements IIoK8sApiCertificatesV1beta1CertificateSigningRequestList {

apiVersion: IIoK8sApiCertificatesV1beta1CertificateSigningRequestList["apiVersion"] = IoK8sApiCertificatesV1beta1CertificateSigningRequestList["apiVersion"];
"items": Array<IIoK8sApiCertificatesV1beta1CertificateSigningRequest>;

kind: IIoK8sApiCertificatesV1beta1CertificateSigningRequestList["kind"] = IoK8sApiCertificatesV1beta1CertificateSigningRequestList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCertificatesV1beta1CertificateSigningRequestList["apiVersion"] = "certificates.k8s.io/v1beta1";
static kind: IIoK8sApiCertificatesV1beta1CertificateSigningRequestList["kind"] = "CertificateSigningRequestList";
}

Model.setSchema(IoK8sApiCertificatesV1beta1CertificateSigningRequestList, "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList", addSchema);

export {
  IIoK8sApiCertificatesV1beta1CertificateSigningRequestList as ICertificateSigningRequestList,
  IoK8sApiCertificatesV1beta1CertificateSigningRequestList as CertificateSigningRequestList
};
