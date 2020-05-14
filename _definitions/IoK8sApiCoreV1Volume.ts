
import { IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from "./IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.ts";

import { IIoK8sApiCoreV1AzureDiskVolumeSource } from "./IoK8sApiCoreV1AzureDiskVolumeSource.ts";

import { IIoK8sApiCoreV1AzureFileVolumeSource } from "./IoK8sApiCoreV1AzureFileVolumeSource.ts";

import { IIoK8sApiCoreV1CephFSVolumeSource } from "./IoK8sApiCoreV1CephFSVolumeSource.ts";

import { IIoK8sApiCoreV1CinderVolumeSource } from "./IoK8sApiCoreV1CinderVolumeSource.ts";

import { IIoK8sApiCoreV1ConfigMapVolumeSource } from "./IoK8sApiCoreV1ConfigMapVolumeSource.ts";

import { IIoK8sApiCoreV1CSIVolumeSource } from "./IoK8sApiCoreV1CSIVolumeSource.ts";

import { IIoK8sApiCoreV1DownwardAPIVolumeSource } from "./IoK8sApiCoreV1DownwardAPIVolumeSource.ts";

import { IIoK8sApiCoreV1EmptyDirVolumeSource } from "./IoK8sApiCoreV1EmptyDirVolumeSource.ts";

import { IIoK8sApiCoreV1FCVolumeSource } from "./IoK8sApiCoreV1FCVolumeSource.ts";

import { IIoK8sApiCoreV1FlexVolumeSource } from "./IoK8sApiCoreV1FlexVolumeSource.ts";

import { IIoK8sApiCoreV1FlockerVolumeSource } from "./IoK8sApiCoreV1FlockerVolumeSource.ts";

import { IIoK8sApiCoreV1GCEPersistentDiskVolumeSource } from "./IoK8sApiCoreV1GCEPersistentDiskVolumeSource.ts";

import { IIoK8sApiCoreV1GitRepoVolumeSource } from "./IoK8sApiCoreV1GitRepoVolumeSource.ts";

import { IIoK8sApiCoreV1GlusterfsVolumeSource } from "./IoK8sApiCoreV1GlusterfsVolumeSource.ts";

import { IIoK8sApiCoreV1HostPathVolumeSource } from "./IoK8sApiCoreV1HostPathVolumeSource.ts";

import { IIoK8sApiCoreV1ISCSIVolumeSource } from "./IoK8sApiCoreV1ISCSIVolumeSource.ts";

import { IIoK8sApiCoreV1NFSVolumeSource } from "./IoK8sApiCoreV1NFSVolumeSource.ts";

import { IIoK8sApiCoreV1PersistentVolumeClaimVolumeSource } from "./IoK8sApiCoreV1PersistentVolumeClaimVolumeSource.ts";

import { IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from "./IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.ts";

import { IIoK8sApiCoreV1PortworxVolumeSource } from "./IoK8sApiCoreV1PortworxVolumeSource.ts";

import { IIoK8sApiCoreV1ProjectedVolumeSource } from "./IoK8sApiCoreV1ProjectedVolumeSource.ts";

import { IIoK8sApiCoreV1QuobyteVolumeSource } from "./IoK8sApiCoreV1QuobyteVolumeSource.ts";

import { IIoK8sApiCoreV1RBDVolumeSource } from "./IoK8sApiCoreV1RBDVolumeSource.ts";

import { IIoK8sApiCoreV1ScaleIOVolumeSource } from "./IoK8sApiCoreV1ScaleIOVolumeSource.ts";

import { IIoK8sApiCoreV1SecretVolumeSource } from "./IoK8sApiCoreV1SecretVolumeSource.ts";

import { IIoK8sApiCoreV1StorageOSVolumeSource } from "./IoK8sApiCoreV1StorageOSVolumeSource.ts";

import { IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from "./IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Volume.ts";

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export interface IIoK8sApiCoreV1Volume {
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
"azureFile"?: IIoK8sApiCoreV1AzureFileVolumeSource;
/**
 * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
 */
"cephfs"?: IIoK8sApiCoreV1CephFSVolumeSource;
/**
 * Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
 */
"cinder"?: IIoK8sApiCoreV1CinderVolumeSource;
/**
 * ConfigMap represents a configMap that should populate this volume
 */
"configMap"?: IIoK8sApiCoreV1ConfigMapVolumeSource;
/**
 * CSI (Container Storage Interface) represents storage that is handled by an external CSI driver (Alpha feature).
 */
"csi"?: IIoK8sApiCoreV1CSIVolumeSource;
/**
 * DownwardAPI represents downward API about the pod that should populate this volume
 */
"downwardAPI"?: IIoK8sApiCoreV1DownwardAPIVolumeSource;
/**
 * EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
 */
"emptyDir"?: IIoK8sApiCoreV1EmptyDirVolumeSource;
/**
 * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
 */
"fc"?: IIoK8sApiCoreV1FCVolumeSource;
/**
 * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
 */
"flexVolume"?: IIoK8sApiCoreV1FlexVolumeSource;
/**
 * Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
 */
"flocker"?: IIoK8sApiCoreV1FlockerVolumeSource;
/**
 * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
 */
"gcePersistentDisk"?: IIoK8sApiCoreV1GCEPersistentDiskVolumeSource;
/**
 * GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
 */
"gitRepo"?: IIoK8sApiCoreV1GitRepoVolumeSource;
/**
 * Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
 */
"glusterfs"?: IIoK8sApiCoreV1GlusterfsVolumeSource;
/**
 * HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 */
"hostPath"?: IIoK8sApiCoreV1HostPathVolumeSource;
/**
 * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
 */
"iscsi"?: IIoK8sApiCoreV1ISCSIVolumeSource;
/**
 * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name": string;
/**
 * NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
 */
"nfs"?: IIoK8sApiCoreV1NFSVolumeSource;
/**
 * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
 */
"persistentVolumeClaim"?: IIoK8sApiCoreV1PersistentVolumeClaimVolumeSource;
/**
 * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
 */
"photonPersistentDisk"?: IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
/**
 * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
 */
"portworxVolume"?: IIoK8sApiCoreV1PortworxVolumeSource;
/**
 * Items for all in one resources secrets, configmaps, and downward API
 */
"projected"?: IIoK8sApiCoreV1ProjectedVolumeSource;
/**
 * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
 */
"quobyte"?: IIoK8sApiCoreV1QuobyteVolumeSource;
/**
 * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
 */
"rbd"?: IIoK8sApiCoreV1RBDVolumeSource;
/**
 * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
 */
"scaleIO"?: IIoK8sApiCoreV1ScaleIOVolumeSource;
/**
 * Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
 */
"secret"?: IIoK8sApiCoreV1SecretVolumeSource;
/**
 * StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
 */
"storageos"?: IIoK8sApiCoreV1StorageOSVolumeSource;
/**
 * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
 */
"vsphereVolume"?: IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export class IoK8sApiCoreV1Volume extends Model<IIoK8sApiCoreV1Volume> implements IIoK8sApiCoreV1Volume {

"awsElasticBlockStore"?: IIoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;

"azureDisk"?: IIoK8sApiCoreV1AzureDiskVolumeSource;

"azureFile"?: IIoK8sApiCoreV1AzureFileVolumeSource;

"cephfs"?: IIoK8sApiCoreV1CephFSVolumeSource;

"cinder"?: IIoK8sApiCoreV1CinderVolumeSource;

"configMap"?: IIoK8sApiCoreV1ConfigMapVolumeSource;

"csi"?: IIoK8sApiCoreV1CSIVolumeSource;

"downwardAPI"?: IIoK8sApiCoreV1DownwardAPIVolumeSource;

"emptyDir"?: IIoK8sApiCoreV1EmptyDirVolumeSource;

"fc"?: IIoK8sApiCoreV1FCVolumeSource;

"flexVolume"?: IIoK8sApiCoreV1FlexVolumeSource;

"flocker"?: IIoK8sApiCoreV1FlockerVolumeSource;

"gcePersistentDisk"?: IIoK8sApiCoreV1GCEPersistentDiskVolumeSource;

"gitRepo"?: IIoK8sApiCoreV1GitRepoVolumeSource;

"glusterfs"?: IIoK8sApiCoreV1GlusterfsVolumeSource;

"hostPath"?: IIoK8sApiCoreV1HostPathVolumeSource;

"iscsi"?: IIoK8sApiCoreV1ISCSIVolumeSource;

"name": string;

"nfs"?: IIoK8sApiCoreV1NFSVolumeSource;

"persistentVolumeClaim"?: IIoK8sApiCoreV1PersistentVolumeClaimVolumeSource;

"photonPersistentDisk"?: IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource;

"portworxVolume"?: IIoK8sApiCoreV1PortworxVolumeSource;

"projected"?: IIoK8sApiCoreV1ProjectedVolumeSource;

"quobyte"?: IIoK8sApiCoreV1QuobyteVolumeSource;

"rbd"?: IIoK8sApiCoreV1RBDVolumeSource;

"scaleIO"?: IIoK8sApiCoreV1ScaleIOVolumeSource;

"secret"?: IIoK8sApiCoreV1SecretVolumeSource;

"storageos"?: IIoK8sApiCoreV1StorageOSVolumeSource;

"vsphereVolume"?: IIoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}

Model.setSchema(IoK8sApiCoreV1Volume, "io.k8s.api.core.v1.Volume", addSchema);

export {
  IIoK8sApiCoreV1Volume as IVolume,
  IoK8sApiCoreV1Volume as Volume
};
