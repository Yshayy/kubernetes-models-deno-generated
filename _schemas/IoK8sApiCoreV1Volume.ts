import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from "./IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1AzureDiskVolumeSource } from "./IoK8sApiCoreV1AzureDiskVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1AzureFileVolumeSource } from "./IoK8sApiCoreV1AzureFileVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1CephFSVolumeSource } from "./IoK8sApiCoreV1CephFSVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1CinderVolumeSource } from "./IoK8sApiCoreV1CinderVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1ConfigMapVolumeSource } from "./IoK8sApiCoreV1ConfigMapVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1CSIVolumeSource } from "./IoK8sApiCoreV1CSIVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1DownwardAPIVolumeSource } from "./IoK8sApiCoreV1DownwardAPIVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1EmptyDirVolumeSource } from "./IoK8sApiCoreV1EmptyDirVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1FCVolumeSource } from "./IoK8sApiCoreV1FCVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1FlexVolumeSource } from "./IoK8sApiCoreV1FlexVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1FlockerVolumeSource } from "./IoK8sApiCoreV1FlockerVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from "./IoK8sApiCoreV1GCEPersistentDiskVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1GitRepoVolumeSource } from "./IoK8sApiCoreV1GitRepoVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1GlusterfsVolumeSource } from "./IoK8sApiCoreV1GlusterfsVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1HostPathVolumeSource } from "./IoK8sApiCoreV1HostPathVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1ISCSIVolumeSource } from "./IoK8sApiCoreV1ISCSIVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1NFSVolumeSource } from "./IoK8sApiCoreV1NFSVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1PersistentVolumeClaimVolumeSource } from "./IoK8sApiCoreV1PersistentVolumeClaimVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from "./IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1PortworxVolumeSource } from "./IoK8sApiCoreV1PortworxVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1ProjectedVolumeSource } from "./IoK8sApiCoreV1ProjectedVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1QuobyteVolumeSource } from "./IoK8sApiCoreV1QuobyteVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1RBDVolumeSource } from "./IoK8sApiCoreV1RBDVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1ScaleIOVolumeSource } from "./IoK8sApiCoreV1ScaleIOVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1SecretVolumeSource } from "./IoK8sApiCoreV1SecretVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1StorageOSVolumeSource } from "./IoK8sApiCoreV1StorageOSVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from "./IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.ts";
const schema: object = {
  "properties": {
    "awsElasticBlockStore": {
      "$ref": "io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#"
    },
    "azureDisk": {
      "$ref": "io.k8s.api.core.v1.AzureDiskVolumeSource#"
    },
    "azureFile": {
      "$ref": "io.k8s.api.core.v1.AzureFileVolumeSource#"
    },
    "cephfs": {
      "$ref": "io.k8s.api.core.v1.CephFSVolumeSource#"
    },
    "cinder": {
      "$ref": "io.k8s.api.core.v1.CinderVolumeSource#"
    },
    "configMap": {
      "$ref": "io.k8s.api.core.v1.ConfigMapVolumeSource#"
    },
    "csi": {
      "$ref": "io.k8s.api.core.v1.CSIVolumeSource#"
    },
    "downwardAPI": {
      "$ref": "io.k8s.api.core.v1.DownwardAPIVolumeSource#"
    },
    "emptyDir": {
      "$ref": "io.k8s.api.core.v1.EmptyDirVolumeSource#"
    },
    "fc": {
      "$ref": "io.k8s.api.core.v1.FCVolumeSource#"
    },
    "flexVolume": {
      "$ref": "io.k8s.api.core.v1.FlexVolumeSource#"
    },
    "flocker": {
      "$ref": "io.k8s.api.core.v1.FlockerVolumeSource#"
    },
    "gcePersistentDisk": {
      "$ref": "io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#"
    },
    "gitRepo": {
      "$ref": "io.k8s.api.core.v1.GitRepoVolumeSource#"
    },
    "glusterfs": {
      "$ref": "io.k8s.api.core.v1.GlusterfsVolumeSource#"
    },
    "hostPath": {
      "$ref": "io.k8s.api.core.v1.HostPathVolumeSource#"
    },
    "iscsi": {
      "$ref": "io.k8s.api.core.v1.ISCSIVolumeSource#"
    },
    "name": {
      "type": "string"
    },
    "nfs": {
      "$ref": "io.k8s.api.core.v1.NFSVolumeSource#"
    },
    "persistentVolumeClaim": {
      "$ref": "io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource#"
    },
    "photonPersistentDisk": {
      "$ref": "io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource#"
    },
    "portworxVolume": {
      "$ref": "io.k8s.api.core.v1.PortworxVolumeSource#"
    },
    "projected": {
      "$ref": "io.k8s.api.core.v1.ProjectedVolumeSource#"
    },
    "quobyte": {
      "$ref": "io.k8s.api.core.v1.QuobyteVolumeSource#"
    },
    "rbd": {
      "$ref": "io.k8s.api.core.v1.RBDVolumeSource#"
    },
    "scaleIO": {
      "$ref": "io.k8s.api.core.v1.ScaleIOVolumeSource#"
    },
    "secret": {
      "$ref": "io.k8s.api.core.v1.SecretVolumeSource#"
    },
    "storageos": {
      "$ref": "io.k8s.api.core.v1.StorageOSVolumeSource#"
    },
    "vsphereVolume": {
      "$ref": "io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#"
    }
  },
  "required": [
    "name"
  ],
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource();
IoK8sApiCoreV1AzureDiskVolumeSource();
IoK8sApiCoreV1AzureFileVolumeSource();
IoK8sApiCoreV1CephFSVolumeSource();
IoK8sApiCoreV1CinderVolumeSource();
IoK8sApiCoreV1ConfigMapVolumeSource();
IoK8sApiCoreV1CSIVolumeSource();
IoK8sApiCoreV1DownwardAPIVolumeSource();
IoK8sApiCoreV1EmptyDirVolumeSource();
IoK8sApiCoreV1FCVolumeSource();
IoK8sApiCoreV1FlexVolumeSource();
IoK8sApiCoreV1FlockerVolumeSource();
IoK8sApiCoreV1GCEPersistentDiskVolumeSource();
IoK8sApiCoreV1GitRepoVolumeSource();
IoK8sApiCoreV1GlusterfsVolumeSource();
IoK8sApiCoreV1HostPathVolumeSource();
IoK8sApiCoreV1ISCSIVolumeSource();
IoK8sApiCoreV1NFSVolumeSource();
IoK8sApiCoreV1PersistentVolumeClaimVolumeSource();
IoK8sApiCoreV1PhotonPersistentDiskVolumeSource();
IoK8sApiCoreV1PortworxVolumeSource();
IoK8sApiCoreV1ProjectedVolumeSource();
IoK8sApiCoreV1QuobyteVolumeSource();
IoK8sApiCoreV1RBDVolumeSource();
IoK8sApiCoreV1ScaleIOVolumeSource();
IoK8sApiCoreV1SecretVolumeSource();
IoK8sApiCoreV1StorageOSVolumeSource();
IoK8sApiCoreV1VsphereVirtualDiskVolumeSource();
register("io.k8s.api.core.v1.Volume", schema);
}

