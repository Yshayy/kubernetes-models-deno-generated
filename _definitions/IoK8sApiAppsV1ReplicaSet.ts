
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAppsV1ReplicaSetSpec } from "./IoK8sApiAppsV1ReplicaSetSpec.ts";

import { IIoK8sApiAppsV1ReplicaSetStatus } from "./IoK8sApiAppsV1ReplicaSetStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1ReplicaSet.ts";

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export interface IIoK8sApiAppsV1ReplicaSet {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ReplicaSet";
/**
 * If the Labels of a ReplicaSet are empty, they are defaulted to be the same as the Pod(s) that the ReplicaSet manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the specification of the desired behavior of the ReplicaSet. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiAppsV1ReplicaSetSpec;
/**
 * Status is the most recently observed status of the ReplicaSet. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiAppsV1ReplicaSetStatus;
}

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 */
export class IoK8sApiAppsV1ReplicaSet extends Model<IIoK8sApiAppsV1ReplicaSet> implements IIoK8sApiAppsV1ReplicaSet {

apiVersion: IIoK8sApiAppsV1ReplicaSet["apiVersion"] = IoK8sApiAppsV1ReplicaSet["apiVersion"];

kind: IIoK8sApiAppsV1ReplicaSet["kind"] = IoK8sApiAppsV1ReplicaSet["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiAppsV1ReplicaSetSpec;

"status"?: IIoK8sApiAppsV1ReplicaSetStatus;

static apiVersion: IIoK8sApiAppsV1ReplicaSet["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1ReplicaSet["kind"] = "ReplicaSet";
}

Model.setSchema(IoK8sApiAppsV1ReplicaSet, "io.k8s.api.apps.v1.ReplicaSet", addSchema);

export {
  IIoK8sApiAppsV1ReplicaSet as IReplicaSet,
  IoK8sApiAppsV1ReplicaSet as ReplicaSet
};
