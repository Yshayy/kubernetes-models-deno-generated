
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1ResourceQuotaSpec } from "./IoK8sApiCoreV1ResourceQuotaSpec.ts";

import { IIoK8sApiCoreV1ResourceQuotaStatus } from "./IoK8sApiCoreV1ResourceQuotaStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ResourceQuota.ts";

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
export interface IIoK8sApiCoreV1ResourceQuota {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ResourceQuota";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the desired quota. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1ResourceQuotaSpec;
/**
 * Status defines the actual enforced quota and its current usage. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1ResourceQuotaStatus;
}

/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 */
export class IoK8sApiCoreV1ResourceQuota extends Model<IIoK8sApiCoreV1ResourceQuota> implements IIoK8sApiCoreV1ResourceQuota {

apiVersion: IIoK8sApiCoreV1ResourceQuota["apiVersion"] = IoK8sApiCoreV1ResourceQuota["apiVersion"];

kind: IIoK8sApiCoreV1ResourceQuota["kind"] = IoK8sApiCoreV1ResourceQuota["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1ResourceQuotaSpec;

"status"?: IIoK8sApiCoreV1ResourceQuotaStatus;

static apiVersion: IIoK8sApiCoreV1ResourceQuota["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ResourceQuota["kind"] = "ResourceQuota";
}

Model.setSchema(IoK8sApiCoreV1ResourceQuota, "io.k8s.api.core.v1.ResourceQuota", addSchema);

export {
  IIoK8sApiCoreV1ResourceQuota as IResourceQuota,
  IoK8sApiCoreV1ResourceQuota as ResourceQuota
};
