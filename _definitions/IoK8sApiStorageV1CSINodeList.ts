
import { IIoK8sApiStorageV1CSINode } from "./IoK8sApiStorageV1CSINode.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiStorageV1CSINodeList.ts";

/**
 * CSINodeList is a collection of CSINode objects.
 */
export interface IIoK8sApiStorageV1CSINodeList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "storage.k8s.io/v1";
/**
 * items is the list of CSINode
 */
"items": Array<IIoK8sApiStorageV1CSINode>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "CSINodeList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CSINodeList is a collection of CSINode objects.
 */
export class IoK8sApiStorageV1CSINodeList extends Model<IIoK8sApiStorageV1CSINodeList> implements IIoK8sApiStorageV1CSINodeList {

apiVersion: IIoK8sApiStorageV1CSINodeList["apiVersion"] = IoK8sApiStorageV1CSINodeList["apiVersion"];

"items": Array<IIoK8sApiStorageV1CSINode>;

kind: IIoK8sApiStorageV1CSINodeList["kind"] = IoK8sApiStorageV1CSINodeList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiStorageV1CSINodeList["apiVersion"] = "storage.k8s.io/v1";
static kind: IIoK8sApiStorageV1CSINodeList["kind"] = "CSINodeList";
}

Model.setSchema(IoK8sApiStorageV1CSINodeList, "io.k8s.api.storage.v1.CSINodeList", addSchema);

export {
  IIoK8sApiStorageV1CSINodeList as ICSINodeList,
  IoK8sApiStorageV1CSINodeList as CSINodeList
};
