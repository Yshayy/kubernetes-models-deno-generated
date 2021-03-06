
import { IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from "./IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.ts";

import { IIoK8sApiCoreV1AzureDiskVolumeSource } from "./IoK8sApiCoreV1AzureDiskVolumeSource.ts";

import { IIoK8sApiCoreV1AzureFilePersistentVolumeSource } from "./IoK8sApiCoreV1AzureFilePersistentVolumeSource.ts";

import { IIoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { IIoK8sApiCoreV1CephFSPersistentVolumeSource } from "./IoK8sApiCoreV1CephFSPersistentVolumeSource.ts";

import { IIoK8sApiCoreV1CinderPersistentVolumeSource } from "./IoK8sApiCoreV1CinderPersistentVolumeSource.ts";

import { IIoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { IIoK8sApiCoreV1CSIPersistentVolumeSource } from "./IoK8sApiCoreV1CSIPersistentVolumeSource.ts";

import { IIoK8sApiCoreV1FCVolumeSource } from "./IoK8sApiCoreV1FCVolumeSource.ts";

import { IIoK8sApiCoreV1FlexPersistentVolumeSource } from "./IoK8sApiCoreV1FlexPersistentVolumeSource.ts";

import { IIoK8sApiCoreV1FlockerVolumeSource } from "./IoK8sApiCoreV1FlockerVolumeSource.ts";

import { IIoK8sApiCoreV1GCEPersistentDiskVolumeSource } from "./IoK8sApiCoreV1GCEPersistentDiskVolumeSource.ts";

import { IIoK8sApiCoreV1GlusterfsPersistentVolumeSource } from "./IoK8sApiCoreV1GlusterfsPersistentVolumeSource.ts";

import { IIoK8sApiCoreV1HostPathVolumeSource } from "./IoK8sApiCoreV1HostPathVolumeSource.ts";

import { IIoK8sApiCoreV1ISCSIPersistentVolumeSource } from "./IoK8sApiCoreV1ISCSIPersistentVolumeSource.ts";

import { IIoK8sApiCoreV1LocalVolumeSource } from "./IoK8sApiCoreV1LocalVolumeSource.ts";

import { IIoK8sApiCoreV1NFSVolumeSource } from "./IoK8sApiCoreV1NFSVolumeSource.ts";

import { IIoK8sApiCoreV1VolumeNodeAffinity } from "./IoK8sApiCoreV1VolumeNodeAffinity.ts";

import { IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from "./IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.ts";

import { IIoK8sApiCoreV1PortworxVolumeSource } from "./IoK8sApiCoreV1PortworxVolumeSource.ts";

import { IIoK8sApiCoreV1QuobyteVolumeSource } from "./IoK8sApiCoreV1QuobyteVolumeSource.ts";

import { IIoK8sApiCoreV1RBDPersistentVolumeSource } from "./IoK8sApiCoreV1RBDPersistentVolumeSource.ts";

import { IIoK8sApiCoreV1ScaleIOPersistentVolumeSource } from "./IoK8sApiCoreV1ScaleIOPersistentVolumeSource.ts";

import { IIoK8sApiCoreV1StorageOSPersistentVolumeSource } from "./IoK8sApiCoreV1StorageOSPersistentVolumeSource.ts";

import { IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from "./IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolumeSpec.ts";

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export interface IIoK8sApiCoreV1PersistentVolumeSpec {
/**
 * AccessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
 */
"accessModes"?: Array<string>;
/**
 * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
 */
"awsElasticBlockStore"?: IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
/**
 * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
 */
"azureDisk"?: IIoK8sApiCoreV1AzureDiskVolumeSource;
/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
"azureFile"?: IIoK8sApiCoreV1AzureFilePersistentVolumeSource;
/**
 * A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
 */
"capacity"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
 */
"cephfs"?: IIoK8sApiCoreV1CephFSPersistentVolumeSource;
/**
 * Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 */
"cinder"?: IIoK8sApiCoreV1CinderPersistentVolumeSource;
/**
 * ClaimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
 */
"claimRef"?: IIoK8sApiCoreV1ObjectReference;
/**
 * CSI represents storage that is handled by an external CSI driver (Beta feature).
 */
"csi"?: IIoK8sApiCoreV1CSIPersistentVolumeSource;
/**
 * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
 */
"fc"?: IIoK8sApiCoreV1FCVolumeSource;
/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
"flexVolume"?: IIoK8sApiCoreV1FlexPersistentVolumeSource;
/**
 * Flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running
 */
"flocker"?: IIoK8sApiCoreV1FlockerVolumeSource;
/**
 * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 */
"gcePersistentDisk"?: IIoK8sApiCoreV1GCEPersistentDiskVolumeSource;
/**
 * Glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://examples.k8s.io/volumes/glusterfs/README.md
 */
"glusterfs"?: IIoK8sApiCoreV1GlusterfsPersistentVolumeSource;
/**
 * HostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 */
"hostPath"?: IIoK8sApiCoreV1HostPathVolumeSource;
/**
 * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.
 */
"iscsi"?: IIoK8sApiCoreV1ISCSIPersistentVolumeSource;
/**
 * Local represents directly-attached storage with node affinity
 */
"local"?: IIoK8sApiCoreV1LocalVolumeSource;
/**
 * A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
 */
"mountOptions"?: Array<string>;
/**
 * NFS represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
 */
"nfs"?: IIoK8sApiCoreV1NFSVolumeSource;
/**
 * NodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.
 */
"nodeAffinity"?: IIoK8sApiCoreV1VolumeNodeAffinity;
/**
 * What happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
 */
"persistentVolumeReclaimPolicy"?: string;
/**
 * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
 */
"photonPersistentDisk"?: IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
/**
 * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
 */
"portworxVolume"?: IIoK8sApiCoreV1PortworxVolumeSource;
/**
 * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
 */
"quobyte"?: IIoK8sApiCoreV1QuobyteVolumeSource;
/**
 * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
 */
"rbd"?: IIoK8sApiCoreV1RBDPersistentVolumeSource;
/**
 * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
 */
"scaleIO"?: IIoK8sApiCoreV1ScaleIOPersistentVolumeSource;
/**
 * Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
 */
"storageClassName"?: string;
/**
 * StorageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod More info: https://examples.k8s.io/volumes/storageos/README.md
 */
"storageos"?: IIoK8sApiCoreV1StorageOSPersistentVolumeSource;
/**
 * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
 */
"volumeMode"?: string;
/**
 * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
 */
"vsphereVolume"?: IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export class IoK8sApiCoreV1PersistentVolumeSpec extends Model<IIoK8sApiCoreV1PersistentVolumeSpec> implements IIoK8sApiCoreV1PersistentVolumeSpec {

"accessModes"?: Array<string>;

"awsElasticBlockStore"?: IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;

"azureDisk"?: IIoK8sApiCoreV1AzureDiskVolumeSource;

"azureFile"?: IIoK8sApiCoreV1AzureFilePersistentVolumeSource;

"capacity"?: {
[key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

"cephfs"?: IIoK8sApiCoreV1CephFSPersistentVolumeSource;

"cinder"?: IIoK8sApiCoreV1CinderPersistentVolumeSource;

"claimRef"?: IIoK8sApiCoreV1ObjectReference;

"csi"?: IIoK8sApiCoreV1CSIPersistentVolumeSource;

"fc"?: IIoK8sApiCoreV1FCVolumeSource;

"flexVolume"?: IIoK8sApiCoreV1FlexPersistentVolumeSource;

"flocker"?: IIoK8sApiCoreV1FlockerVolumeSource;

"gcePersistentDisk"?: IIoK8sApiCoreV1GCEPersistentDiskVolumeSource;

"glusterfs"?: IIoK8sApiCoreV1GlusterfsPersistentVolumeSource;

"hostPath"?: IIoK8sApiCoreV1HostPathVolumeSource;

"iscsi"?: IIoK8sApiCoreV1ISCSIPersistentVolumeSource;

"local"?: IIoK8sApiCoreV1LocalVolumeSource;

"mountOptions"?: Array<string>;

"nfs"?: IIoK8sApiCoreV1NFSVolumeSource;

"nodeAffinity"?: IIoK8sApiCoreV1VolumeNodeAffinity;

"persistentVolumeReclaimPolicy"?: string;

"photonPersistentDisk"?: IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource;

"portworxVolume"?: IIoK8sApiCoreV1PortworxVolumeSource;

"quobyte"?: IIoK8sApiCoreV1QuobyteVolumeSource;

"rbd"?: IIoK8sApiCoreV1RBDPersistentVolumeSource;

"scaleIO"?: IIoK8sApiCoreV1ScaleIOPersistentVolumeSource;

"storageClassName"?: string;

"storageos"?: IIoK8sApiCoreV1StorageOSPersistentVolumeSource;

"volumeMode"?: string;

"vsphereVolume"?: IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}

Model.setSchema(IoK8sApiCoreV1PersistentVolumeSpec, "io.k8s.api.core.v1.PersistentVolumeSpec", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolumeSpec as IPersistentVolumeSpec,
  IoK8sApiCoreV1PersistentVolumeSpec as PersistentVolumeSpec
};
