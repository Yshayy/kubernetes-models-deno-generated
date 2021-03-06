
import { IIoK8sApiCoreV1PersistentVolumeClaim } from "./IoK8sApiCoreV1PersistentVolumeClaim.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PersistentVolumeClaimList.ts";

/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
export interface IIoK8sApiCoreV1PersistentVolumeClaimList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * A list of persistent volume claims. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
 */
"items": Array<IIoK8sApiCoreV1PersistentVolumeClaim>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PersistentVolumeClaimList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 */
export class IoK8sApiCoreV1PersistentVolumeClaimList extends Model<IIoK8sApiCoreV1PersistentVolumeClaimList> implements IIoK8sApiCoreV1PersistentVolumeClaimList {

apiVersion: IIoK8sApiCoreV1PersistentVolumeClaimList["apiVersion"] = IoK8sApiCoreV1PersistentVolumeClaimList["apiVersion"];

"items": Array<IIoK8sApiCoreV1PersistentVolumeClaim>;

kind: IIoK8sApiCoreV1PersistentVolumeClaimList["kind"] = IoK8sApiCoreV1PersistentVolumeClaimList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1PersistentVolumeClaimList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1PersistentVolumeClaimList["kind"] = "PersistentVolumeClaimList";
}

Model.setSchema(IoK8sApiCoreV1PersistentVolumeClaimList, "io.k8s.api.core.v1.PersistentVolumeClaimList", addSchema);

export {
  IIoK8sApiCoreV1PersistentVolumeClaimList as IPersistentVolumeClaimList,
  IoK8sApiCoreV1PersistentVolumeClaimList as PersistentVolumeClaimList
};
