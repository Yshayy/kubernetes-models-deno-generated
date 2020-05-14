
import { IIoK8sApiStorageV1CSIDriver } from "./IoK8sApiStorageV1CSIDriver.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1CSIDriverList.ts";

/**
 * CSIDriverList is a collection of CSIDriver objects.
 */
export interface IIoK8sApiStorageV1CSIDriverList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "storage.k8s.io/v1";
/**
 * items is the list of CSIDriver
 */
"items": Array<IIoK8sApiStorageV1CSIDriver>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CSIDriverList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CSIDriverList is a collection of CSIDriver objects.
 */
export class IoK8sApiStorageV1CSIDriverList extends Model<IIoK8sApiStorageV1CSIDriverList> implements IIoK8sApiStorageV1CSIDriverList {

apiVersion: IIoK8sApiStorageV1CSIDriverList["apiVersion"] = IoK8sApiStorageV1CSIDriverList["apiVersion"];

"items": Array<IIoK8sApiStorageV1CSIDriver>;

kind: IIoK8sApiStorageV1CSIDriverList["kind"] = IoK8sApiStorageV1CSIDriverList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiStorageV1CSIDriverList["apiVersion"] = "storage.k8s.io/v1";
static kind: IIoK8sApiStorageV1CSIDriverList["kind"] = "CSIDriverList";
}

Model.setSchema(IoK8sApiStorageV1CSIDriverList, "io.k8s.api.storage.v1.CSIDriverList", addSchema);

export {
  IIoK8sApiStorageV1CSIDriverList as ICSIDriverList,
  IoK8sApiStorageV1CSIDriverList as CSIDriverList
};
