
import { IIoK8sApiStorageV1StorageClass } from "./IoK8sApiStorageV1StorageClass.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1StorageClassList.ts";

/**
 * StorageClassList is a collection of storage classes.
 */
export interface IIoK8sApiStorageV1StorageClassList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "storage.k8s.io/v1";
/**
 * Items is the list of StorageClasses
 */
"items": Array<IIoK8sApiStorageV1StorageClass>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "StorageClassList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * StorageClassList is a collection of storage classes.
 */
export class IoK8sApiStorageV1StorageClassList extends Model<IIoK8sApiStorageV1StorageClassList> implements IIoK8sApiStorageV1StorageClassList {

apiVersion: IIoK8sApiStorageV1StorageClassList["apiVersion"] = IoK8sApiStorageV1StorageClassList["apiVersion"];

"items": Array<IIoK8sApiStorageV1StorageClass>;

kind: IIoK8sApiStorageV1StorageClassList["kind"] = IoK8sApiStorageV1StorageClassList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiStorageV1StorageClassList["apiVersion"] = "storage.k8s.io/v1";
static kind: IIoK8sApiStorageV1StorageClassList["kind"] = "StorageClassList";
}

Model.setSchema(IoK8sApiStorageV1StorageClassList, "io.k8s.api.storage.v1.StorageClassList", addSchema);

export {
  IIoK8sApiStorageV1StorageClassList as IStorageClassList,
  IoK8sApiStorageV1StorageClassList as StorageClassList
};
