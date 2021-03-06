
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAppsV1DaemonSetSpec } from "./IoK8sApiAppsV1DaemonSetSpec.ts";

import { IIoK8sApiAppsV1DaemonSetStatus } from "./IoK8sApiAppsV1DaemonSetStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1DaemonSet.ts";

/**
 * DaemonSet represents the configuration of a daemon set.
 */
export interface IIoK8sApiAppsV1DaemonSet {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "DaemonSet";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiAppsV1DaemonSetSpec;
/**
 * The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiAppsV1DaemonSetStatus;
}

/**
 * DaemonSet represents the configuration of a daemon set.
 */
export class IoK8sApiAppsV1DaemonSet extends Model<IIoK8sApiAppsV1DaemonSet> implements IIoK8sApiAppsV1DaemonSet {

apiVersion: IIoK8sApiAppsV1DaemonSet["apiVersion"] = IoK8sApiAppsV1DaemonSet["apiVersion"];

kind: IIoK8sApiAppsV1DaemonSet["kind"] = IoK8sApiAppsV1DaemonSet["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiAppsV1DaemonSetSpec;

"status"?: IIoK8sApiAppsV1DaemonSetStatus;

static apiVersion: IIoK8sApiAppsV1DaemonSet["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1DaemonSet["kind"] = "DaemonSet";
}

Model.setSchema(IoK8sApiAppsV1DaemonSet, "io.k8s.api.apps.v1.DaemonSet", addSchema);

export {
  IIoK8sApiAppsV1DaemonSet as IDaemonSet,
  IoK8sApiAppsV1DaemonSet as DaemonSet
};
