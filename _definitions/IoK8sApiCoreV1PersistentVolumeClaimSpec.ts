
import { IIoK8sApiCoreV1TypedLocalObjectReference } from "./IoK8sApiCoreV1TypedLocalObjectReference.ts";

import { IIoK8sApiCoreV1ResourceRequirements } from "./IoK8sApiCoreV1ResourceRequirements.ts";

import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "./IoK8sApimachineryPkgApisMetaV1LabelSelector.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolumeClaimSpec.ts";

/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 */
export interface IIoK8sApiCoreV1PersistentVolumeClaimSpec {
/**
 * AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
 */
"accessModes"?: Array<string>;
/**
 * This field can be used to specify either: \* An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot - Beta) \* An existing PVC (PersistentVolumeClaim) \* An existing custom resource/object that implements data population (Alpha) In order to use VolumeSnapshot object types, the appropriate feature gate must be enabled (VolumeSnapshotDataSource or AnyVolumeDataSource) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the specified data source is not supported, the volume will not be created and the failure will be reported as an event. In the future, we plan to support more data source types and the behavior of the provisioner may change.
 */
"dataSource"?: IIoK8sApiCoreV1TypedLocalObjectReference;
/**
 * Resources represents the minimum resources the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
 */
"resources"?: IIoK8sApiCoreV1ResourceRequirements;
/**
 * A label query over volumes to consider for binding.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
 */
"storageClassName"?: string;
/**
 * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
 */
"volumeMode"?: string;
/**
 * VolumeName is the binding reference to the PersistentVolume backing this claim.
 */
"volumeName"?: string;
}

/**
 * PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
 */
export class IoK8sApiCoreV1PersistentVolumeClaimSpec extends Model<IIoK8sApiCoreV1PersistentVolumeClaimSpec> implements IIoK8sApiCoreV1PersistentVolumeClaimSpec {

"accessModes"?: Array<string>;

"dataSource"?: IIoK8sApiCoreV1TypedLocalObjectReference;

"resources"?: IIoK8sApiCoreV1ResourceRequirements;

"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

"storageClassName"?: string;

"volumeMode"?: string;

"volumeName"?: string;
}

Model.setSchema(IoK8sApiCoreV1PersistentVolumeClaimSpec, "io.k8s.api.core.v1.PersistentVolumeClaimSpec", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolumeClaimSpec as IPersistentVolumeClaimSpec,
  IoK8sApiCoreV1PersistentVolumeClaimSpec as PersistentVolumeClaimSpec
};
