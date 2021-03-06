
import { IIoK8sApiCoreV1TopologySelectorTerm } from "./IoK8sApiCoreV1TopologySelectorTerm.ts";

import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1beta1StorageClass.ts";

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export interface IIoK8sApiStorageV1beta1StorageClass {
/**
 * AllowVolumeExpansion shows whether the storage class allow volume expand
 */
"allowVolumeExpansion"?: boolean;
/**
 * Restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
 */
"allowedTopologies"?: Array<IIoK8sApiCoreV1TopologySelectorTerm>;
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "storage.k8s.io/v1beta1";
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "StorageClass";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Dynamically provisioned PersistentVolumes of this storage class are created with these mountOptions, e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
 */
"mountOptions"?: Array<string>;
/**
 * Parameters holds the parameters for the provisioner that should create volumes of this storage class.
 */
"parameters"?: {
[key: string]: string;
};
/**
 * Provisioner indicates the type of the provisioner.
 */
"provisioner": string;
/**
 * Dynamically provisioned PersistentVolumes of this storage class are created with this reclaimPolicy. Defaults to Delete.
 */
"reclaimPolicy"?: string;
/**
 * VolumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.
 */
"volumeBindingMode"?: string;
}

/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.
 * 
 * StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 */
export class IoK8sApiStorageV1beta1StorageClass extends Model<IIoK8sApiStorageV1beta1StorageClass> implements IIoK8sApiStorageV1beta1StorageClass {

"allowVolumeExpansion"?: boolean;

"allowedTopologies"?: Array<IIoK8sApiCoreV1TopologySelectorTerm>;

apiVersion: IIoK8sApiStorageV1beta1StorageClass["apiVersion"] = IoK8sApiStorageV1beta1StorageClass["apiVersion"];

kind: IIoK8sApiStorageV1beta1StorageClass["kind"] = IoK8sApiStorageV1beta1StorageClass["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"mountOptions"?: Array<string>;

"parameters"?: {
[key: string]: string;
};

"provisioner": string;

"reclaimPolicy"?: string;

"volumeBindingMode"?: string;

static apiVersion: IIoK8sApiStorageV1beta1StorageClass["apiVersion"] = "storage.k8s.io/v1beta1";
static kind: IIoK8sApiStorageV1beta1StorageClass["kind"] = "StorageClass";
}

Model.setSchema(IoK8sApiStorageV1beta1StorageClass, "io.k8s.api.storage.v1beta1.StorageClass", addSchema);

export {
  IIoK8sApiStorageV1beta1StorageClass as IStorageClass,
  IoK8sApiStorageV1beta1StorageClass as StorageClass
};
