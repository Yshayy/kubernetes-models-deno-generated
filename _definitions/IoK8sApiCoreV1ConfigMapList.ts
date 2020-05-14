
import { IIoK8sApiCoreV1ConfigMap } from "./IoK8sApiCoreV1ConfigMap.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1ConfigMapList.ts";

/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
export interface IIoK8sApiCoreV1ConfigMapList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Items is the list of ConfigMaps.
 */
"items": Array<IIoK8sApiCoreV1ConfigMap>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "ConfigMapList";
/**
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 */
export class IoK8sApiCoreV1ConfigMapList extends Model<IIoK8sApiCoreV1ConfigMapList> implements IIoK8sApiCoreV1ConfigMapList {

apiVersion: IIoK8sApiCoreV1ConfigMapList["apiVersion"] = IoK8sApiCoreV1ConfigMapList["apiVersion"];

"items": Array<IIoK8sApiCoreV1ConfigMap>;

kind: IIoK8sApiCoreV1ConfigMapList["kind"] = IoK8sApiCoreV1ConfigMapList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1ConfigMapList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1ConfigMapList["kind"] = "ConfigMapList";
}

Model.setSchema(IoK8sApiCoreV1ConfigMapList, "io.k8s.api.core.v1.ConfigMapList", addSchema);

export {
  IIoK8sApiCoreV1ConfigMapList as IConfigMapList,
  IoK8sApiCoreV1ConfigMapList as ConfigMapList
};
