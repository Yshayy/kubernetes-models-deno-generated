import { register } from "../__include/validate/src/index.ts";

import { addSchema as IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from "./IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1AzureDiskVolumeSource } from "./IoK8sApiCoreV1AzureDiskVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1AzureFilePersistentVolumeSource } from "./IoK8sApiCoreV1AzureFilePersistentVolumeSource.ts";

import { addSchema as IoK8sApimachineryPkgApiResourceQuantity } from "./IoK8sApimachineryPkgApiResourceQuantity.ts";

import { addSchema as IoK8sApiCoreV1CephFSPersistentVolumeSource } from "./IoK8sApiCoreV1CephFSPersistentVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1CinderPersistentVolumeSource } from "./IoK8sApiCoreV1CinderPersistentVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { addSchema as IoK8sApiCoreV1CSIPersistentVolumeSource } from "./IoK8sApiCoreV1CSIPersistentVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1FCVolumeSource } from "./IoK8sApiCoreV1FCVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1FlexPersistentVolumeSource } from "./IoK8sApiCoreV1FlexPersistentVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1FlockerVolumeSource } from "./IoK8sApiCoreV1FlockerVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from "./IoK8sApiCoreV1GCEPersistentDiskVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1GlusterfsPersistentVolumeSource } from "./IoK8sApiCoreV1GlusterfsPersistentVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1HostPathVolumeSource } from "./IoK8sApiCoreV1HostPathVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1ISCSIPersistentVolumeSource } from "./IoK8sApiCoreV1ISCSIPersistentVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1LocalVolumeSource } from "./IoK8sApiCoreV1LocalVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1NFSVolumeSource } from "./IoK8sApiCoreV1NFSVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1VolumeNodeAffinity } from "./IoK8sApiCoreV1VolumeNodeAffinity.ts";

import { addSchema as IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from "./IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1PortworxVolumeSource } from "./IoK8sApiCoreV1PortworxVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1QuobyteVolumeSource } from "./IoK8sApiCoreV1QuobyteVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1RBDPersistentVolumeSource } from "./IoK8sApiCoreV1RBDPersistentVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1ScaleIOPersistentVolumeSource } from "./IoK8sApiCoreV1ScaleIOPersistentVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1StorageOSPersistentVolumeSource } from "./IoK8sApiCoreV1StorageOSPersistentVolumeSource.ts";

import { addSchema as IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from "./IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.ts";
const schema: object = {
  "properties": {
    "accessModes": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "awsElasticBlockStore": {
      "$ref": "io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource#"
    },
    "azureDisk": {
      "$ref": "io.k8s.api.core.v1.AzureDiskVolumeSource#"
    },
    "azureFile": {
      "$ref": "io.k8s.api.core.v1.AzureFilePersistentVolumeSource#"
    },
    "capacity": {
      "additionalProperties": {
        "$ref": "io.k8s.apimachinery.pkg.api.resource.Quantity#"
      },
      "type": "object"
    },
    "cephfs": {
      "$ref": "io.k8s.api.core.v1.CephFSPersistentVolumeSource#"
    },
    "cinder": {
      "$ref": "io.k8s.api.core.v1.CinderPersistentVolumeSource#"
    },
    "claimRef": {
      "$ref": "io.k8s.api.core.v1.ObjectReference#"
    },
    "csi": {
      "$ref": "io.k8s.api.core.v1.CSIPersistentVolumeSource#"
    },
    "fc": {
      "$ref": "io.k8s.api.core.v1.FCVolumeSource#"
    },
    "flexVolume": {
      "$ref": "io.k8s.api.core.v1.FlexPersistentVolumeSource#"
    },
    "flocker": {
      "$ref": "io.k8s.api.core.v1.FlockerVolumeSource#"
    },
    "gcePersistentDisk": {
      "$ref": "io.k8s.api.core.v1.GCEPersistentDiskVolumeSource#"
    },
    "glusterfs": {
      "$ref": "io.k8s.api.core.v1.GlusterfsPersistentVolumeSource#"
    },
    "hostPath": {
      "$ref": "io.k8s.api.core.v1.HostPathVolumeSource#"
    },
    "iscsi": {
      "$ref": "io.k8s.api.core.v1.ISCSIPersistentVolumeSource#"
    },
    "local": {
      "$ref": "io.k8s.api.core.v1.LocalVolumeSource#"
    },
    "mountOptions": {
      "items": {
        "type": "string"
      },
      "type": "array"
    },
    "nfs": {
      "$ref": "io.k8s.api.core.v1.NFSVolumeSource#"
    },
    "nodeAffinity": {
      "$ref": "io.k8s.api.core.v1.VolumeNodeAffinity#"
    },
    "persistentVolumeReclaimPolicy": {
      "type": "string"
    },
    "photonPersistentDisk": {
      "$ref": "io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource#"
    },
    "portworxVolume": {
      "$ref": "io.k8s.api.core.v1.PortworxVolumeSource#"
    },
    "quobyte": {
      "$ref": "io.k8s.api.core.v1.QuobyteVolumeSource#"
    },
    "rbd": {
      "$ref": "io.k8s.api.core.v1.RBDPersistentVolumeSource#"
    },
    "scaleIO": {
      "$ref": "io.k8s.api.core.v1.ScaleIOPersistentVolumeSource#"
    },
    "storageClassName": {
      "type": "string"
    },
    "storageos": {
      "$ref": "io.k8s.api.core.v1.StorageOSPersistentVolumeSource#"
    },
    "volumeMode": {
      "type": "string"
    },
    "vsphereVolume": {
      "$ref": "io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource#"
    }
  },
  "type": "object"
};

export function addSchema() {
IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource();
IoK8sApiCoreV1AzureDiskVolumeSource();
IoK8sApiCoreV1AzureFilePersistentVolumeSource();
IoK8sApimachineryPkgApiResourceQuantity();
IoK8sApiCoreV1CephFSPersistentVolumeSource();
IoK8sApiCoreV1CinderPersistentVolumeSource();
IoK8sApiCoreV1ObjectReference();
IoK8sApiCoreV1CSIPersistentVolumeSource();
IoK8sApiCoreV1FCVolumeSource();
IoK8sApiCoreV1FlexPersistentVolumeSource();
IoK8sApiCoreV1FlockerVolumeSource();
IoK8sApiCoreV1GCEPersistentDiskVolumeSource();
IoK8sApiCoreV1GlusterfsPersistentVolumeSource();
IoK8sApiCoreV1HostPathVolumeSource();
IoK8sApiCoreV1ISCSIPersistentVolumeSource();
IoK8sApiCoreV1LocalVolumeSource();
IoK8sApiCoreV1NFSVolumeSource();
IoK8sApiCoreV1VolumeNodeAffinity();
IoK8sApiCoreV1PhotonPersistentDiskVolumeSource();
IoK8sApiCoreV1PortworxVolumeSource();
IoK8sApiCoreV1QuobyteVolumeSource();
IoK8sApiCoreV1RBDPersistentVolumeSource();
IoK8sApiCoreV1ScaleIOPersistentVolumeSource();
IoK8sApiCoreV1StorageOSPersistentVolumeSource();
IoK8sApiCoreV1VsphereVirtualDiskVolumeSource();
register("io.k8s.api.core.v1.PersistentVolumeSpec", schema);
}

