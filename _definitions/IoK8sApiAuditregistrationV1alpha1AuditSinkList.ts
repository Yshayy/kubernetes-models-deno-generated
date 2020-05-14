
import { IIoK8sApiAuditregistrationV1alpha1AuditSink } from "./IoK8sApiAuditregistrationV1alpha1AuditSink.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAuditregistrationV1alpha1AuditSinkList.ts";

/**
 * AuditSinkList is a list of AuditSink items.
 */
export interface IIoK8sApiAuditregistrationV1alpha1AuditSinkList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "auditregistration.k8s.io/v1alpha1";
/**
 * List of audit configurations.
 */
"items": Array<IIoK8sApiAuditregistrationV1alpha1AuditSink>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "AuditSinkList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * AuditSinkList is a list of AuditSink items.
 */
export class IoK8sApiAuditregistrationV1alpha1AuditSinkList extends Model<IIoK8sApiAuditregistrationV1alpha1AuditSinkList> implements IIoK8sApiAuditregistrationV1alpha1AuditSinkList {

apiVersion: IIoK8sApiAuditregistrationV1alpha1AuditSinkList["apiVersion"] = IoK8sApiAuditregistrationV1alpha1AuditSinkList["apiVersion"];

"items": Array<IIoK8sApiAuditregistrationV1alpha1AuditSink>;

kind: IIoK8sApiAuditregistrationV1alpha1AuditSinkList["kind"] = IoK8sApiAuditregistrationV1alpha1AuditSinkList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAuditregistrationV1alpha1AuditSinkList["apiVersion"] = "auditregistration.k8s.io/v1alpha1";
static kind: IIoK8sApiAuditregistrationV1alpha1AuditSinkList["kind"] = "AuditSinkList";
}

Model.setSchema(IoK8sApiAuditregistrationV1alpha1AuditSinkList, "io.k8s.api.auditregistration.v1alpha1.AuditSinkList", addSchema);

export {
  IIoK8sApiAuditregistrationV1alpha1AuditSinkList as IAuditSinkList,
  IoK8sApiAuditregistrationV1alpha1AuditSinkList as AuditSinkList
};
