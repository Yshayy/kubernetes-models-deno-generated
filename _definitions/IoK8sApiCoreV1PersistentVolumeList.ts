
import { IIoK8sApiCoreV1PersistentVolume } from "./IoK8sApiCoreV1PersistentVolume.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolumeList.ts";

/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
export interface IIoK8sApiCoreV1PersistentVolumeList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 */
"items": Array<IIoK8sApiCoreV1PersistentVolume>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PersistentVolumeList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PersistentVolumeList is a list of PersistentVolume items.
 */
export class IoK8sApiCoreV1PersistentVolumeList extends Model<IIoK8sApiCoreV1PersistentVolumeList> implements IIoK8sApiCoreV1PersistentVolumeList {

apiVersion: IIoK8sApiCoreV1PersistentVolumeList["apiVersion"] = IoK8sApiCoreV1PersistentVolumeList["apiVersion"];

"items": Array<IIoK8sApiCoreV1PersistentVolume>;

kind: IIoK8sApiCoreV1PersistentVolumeList["kind"] = IoK8sApiCoreV1PersistentVolumeList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1PersistentVolumeList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1PersistentVolumeList["kind"] = "PersistentVolumeList";
}

Model.setSchema(IoK8sApiCoreV1PersistentVolumeList, "io.k8s.api.core.v1.PersistentVolumeList", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolumeList as IPersistentVolumeList,
  IoK8sApiCoreV1PersistentVolumeList as PersistentVolumeList
};
