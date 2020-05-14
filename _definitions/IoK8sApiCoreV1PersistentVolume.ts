
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1PersistentVolumeSpec } from "./IoK8sApiCoreV1PersistentVolumeSpec.ts";

import { IIoK8sApiCoreV1PersistentVolumeStatus } from "./IoK8sApiCoreV1PersistentVolumeStatus.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolume.ts";

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
export interface IIoK8sApiCoreV1PersistentVolume {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PersistentVolume";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
 */
"spec"?: IIoK8sApiCoreV1PersistentVolumeSpec;
/**
 * Status represents the current information/status for the persistent volume. Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
 */
"status"?: IIoK8sApiCoreV1PersistentVolumeStatus;
}

/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
export class IoK8sApiCoreV1PersistentVolume extends Model<IIoK8sApiCoreV1PersistentVolume> implements IIoK8sApiCoreV1PersistentVolume {

apiVersion: IIoK8sApiCoreV1PersistentVolume["apiVersion"] = IoK8sApiCoreV1PersistentVolume["apiVersion"];

kind: IIoK8sApiCoreV1PersistentVolume["kind"] = IoK8sApiCoreV1PersistentVolume["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"spec"?: IIoK8sApiCoreV1PersistentVolumeSpec;

"status"?: IIoK8sApiCoreV1PersistentVolumeStatus;

static apiVersion: IIoK8sApiCoreV1PersistentVolume["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1PersistentVolume["kind"] = "PersistentVolume";
}

Model.setSchema(IoK8sApiCoreV1PersistentVolume, "io.k8s.api.core.v1.PersistentVolume", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolume as IPersistentVolume,
  IoK8sApiCoreV1PersistentVolume as PersistentVolume
};
