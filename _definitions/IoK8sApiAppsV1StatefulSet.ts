
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiAppsV1StatefulSetSpec } from "./IoK8sApiAppsV1StatefulSetSpec.ts";

import { IIoK8sApiAppsV1StatefulSetStatus } from "./IoK8sApiAppsV1StatefulSetStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1StatefulSet.ts";

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export interface IIoK8sApiAppsV1StatefulSet {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "StatefulSet";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the desired identities of pods in this set.
 */
"spec"?: IIoK8sApiAppsV1StatefulSetSpec;
/**
 * Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
 */
"status"?: IIoK8sApiAppsV1StatefulSetStatus;
}

/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 *  - Network: A single stable DNS and hostname.
 *  - Storage: As many VolumeClaims as requested.
 * The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 */
export class IoK8sApiAppsV1StatefulSet extends Model<IIoK8sApiAppsV1StatefulSet> implements IIoK8sApiAppsV1StatefulSet {

apiVersion: IIoK8sApiAppsV1StatefulSet["apiVersion"] = IoK8sApiAppsV1StatefulSet["apiVersion"];

kind: IIoK8sApiAppsV1StatefulSet["kind"] = IoK8sApiAppsV1StatefulSet["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiAppsV1StatefulSetSpec;

"status"?: IIoK8sApiAppsV1StatefulSetStatus;

static apiVersion: IIoK8sApiAppsV1StatefulSet["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1StatefulSet["kind"] = "StatefulSet";
}

Model.setSchema(IoK8sApiAppsV1StatefulSet, "io.k8s.api.apps.v1.StatefulSet", addSchema);

export {
  IIoK8sApiAppsV1StatefulSet as IStatefulSet,
  IoK8sApiAppsV1StatefulSet as StatefulSet
};
