
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1PersistentVolumeClaimSpec } from "./IoK8sApiCoreV1PersistentVolumeClaimSpec.ts";

import { IIoK8sApiCoreV1PersistentVolumeClaimStatus } from "./IoK8sApiCoreV1PersistentVolumeClaimStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolumeClaim.ts";

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export interface IIoK8sApiCoreV1PersistentVolumeClaim {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PersistentVolumeClaim";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
 */
"spec"?: IIoK8sApiCoreV1PersistentVolumeClaimSpec;
/**
 * Status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
 */
"status"?: IIoK8sApiCoreV1PersistentVolumeClaimStatus;
}

/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 */
export class IoK8sApiCoreV1PersistentVolumeClaim extends Model<IIoK8sApiCoreV1PersistentVolumeClaim> implements IIoK8sApiCoreV1PersistentVolumeClaim {

apiVersion: IIoK8sApiCoreV1PersistentVolumeClaim["apiVersion"] = IoK8sApiCoreV1PersistentVolumeClaim["apiVersion"];

kind: IIoK8sApiCoreV1PersistentVolumeClaim["kind"] = IoK8sApiCoreV1PersistentVolumeClaim["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1PersistentVolumeClaimSpec;

"status"?: IIoK8sApiCoreV1PersistentVolumeClaimStatus;

static apiVersion: IIoK8sApiCoreV1PersistentVolumeClaim["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1PersistentVolumeClaim["kind"] = "PersistentVolumeClaim";
}

Model.setSchema(IoK8sApiCoreV1PersistentVolumeClaim, "io.k8s.api.core.v1.PersistentVolumeClaim", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolumeClaim as IPersistentVolumeClaim,
  IoK8sApiCoreV1PersistentVolumeClaim as PersistentVolumeClaim
};
