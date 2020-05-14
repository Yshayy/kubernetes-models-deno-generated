
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1LimitRangeSpec } from "./IoK8sApiCoreV1LimitRangeSpec.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1LimitRange.ts";

/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
export interface IIoK8sApiCoreV1LimitRange {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "LimitRange";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1LimitRangeSpec;
}

/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 */
export class IoK8sApiCoreV1LimitRange extends Model<IIoK8sApiCoreV1LimitRange> implements IIoK8sApiCoreV1LimitRange {

apiVersion: IIoK8sApiCoreV1LimitRange["apiVersion"] = IoK8sApiCoreV1LimitRange["apiVersion"];

kind: IIoK8sApiCoreV1LimitRange["kind"] = IoK8sApiCoreV1LimitRange["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1LimitRangeSpec;

static apiVersion: IIoK8sApiCoreV1LimitRange["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1LimitRange["kind"] = "LimitRange";
}

Model.setSchema(IoK8sApiCoreV1LimitRange, "io.k8s.api.core.v1.LimitRange", addSchema);

export {
  IIoK8sApiCoreV1LimitRange as ILimitRange,
  IoK8sApiCoreV1LimitRange as LimitRange
};
