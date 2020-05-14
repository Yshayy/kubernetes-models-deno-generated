
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1PodSpec } from "./IoK8sApiCoreV1PodSpec.ts";

import { IIoK8sApiCoreV1PodStatus } from "./IoK8sApiCoreV1PodStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Pod.ts";

/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 */
export interface IIoK8sApiCoreV1Pod {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Pod";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiCoreV1PodSpec;
/**
 * Most recently observed status of the pod. This data may not be up to date. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiCoreV1PodStatus;
}

/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 */
export class IoK8sApiCoreV1Pod extends Model<IIoK8sApiCoreV1Pod> implements IIoK8sApiCoreV1Pod {

apiVersion: IIoK8sApiCoreV1Pod["apiVersion"] = IoK8sApiCoreV1Pod["apiVersion"];

kind: IIoK8sApiCoreV1Pod["kind"] = IoK8sApiCoreV1Pod["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1PodSpec;

"status"?: IIoK8sApiCoreV1PodStatus;

static apiVersion: IIoK8sApiCoreV1Pod["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1Pod["kind"] = "Pod";
}

Model.setSchema(IoK8sApiCoreV1Pod, "io.k8s.api.core.v1.Pod", addSchema);

export {
  IIoK8sApiCoreV1Pod as IPod,
  IoK8sApiCoreV1Pod as Pod
};
