
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec } from "./IoK8sApiAuditregistrationV1alpha1AuditSinkSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuditregistrationV1alpha1AuditSink.ts";

/**
 * AuditSink represents a cluster level audit sink
 */
export interface IIoK8sApiAuditregistrationV1alpha1AuditSink {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "auditregistration.k8s.io/v1alpha1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "AuditSink";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the audit configuration spec
 */
"spec"?: IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec;
}

/**
 * AuditSink represents a cluster level audit sink
 */
export class IoK8sApiAuditregistrationV1alpha1AuditSink extends Model<IIoK8sApiAuditregistrationV1alpha1AuditSink> implements IIoK8sApiAuditregistrationV1alpha1AuditSink {

apiVersion: IIoK8sApiAuditregistrationV1alpha1AuditSink["apiVersion"] = IoK8sApiAuditregistrationV1alpha1AuditSink["apiVersion"];

kind: IIoK8sApiAuditregistrationV1alpha1AuditSink["kind"] = IoK8sApiAuditregistrationV1alpha1AuditSink["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiAuditregistrationV1alpha1AuditSinkSpec;

static apiVersion: IIoK8sApiAuditregistrationV1alpha1AuditSink["apiVersion"] = "auditregistration.k8s.io/v1alpha1";
static kind: IIoK8sApiAuditregistrationV1alpha1AuditSink["kind"] = "AuditSink";
}

Model.setSchema(IoK8sApiAuditregistrationV1alpha1AuditSink, "io.k8s.api.auditregistration.v1alpha1.AuditSink", addSchema);

export {
  IIoK8sApiAuditregistrationV1alpha1AuditSink as IAuditSink,
  IoK8sApiAuditregistrationV1alpha1AuditSink as AuditSink
};
