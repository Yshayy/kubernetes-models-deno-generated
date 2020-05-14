
import { IIoK8sApiAppsV1StatefulSet } from "./IoK8sApiAppsV1StatefulSet.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiAppsV1StatefulSetList.ts";

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export interface IIoK8sApiAppsV1StatefulSetList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "apps/v1";
"items": Array<IIoK8sApiAppsV1StatefulSet>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "StatefulSetList";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * StatefulSetList is a collection of StatefulSets.
 */
export class IoK8sApiAppsV1StatefulSetList extends Model<IIoK8sApiAppsV1StatefulSetList> implements IIoK8sApiAppsV1StatefulSetList {

apiVersion: IIoK8sApiAppsV1StatefulSetList["apiVersion"] = IoK8sApiAppsV1StatefulSetList["apiVersion"];
"items": Array<IIoK8sApiAppsV1StatefulSet>;

kind: IIoK8sApiAppsV1StatefulSetList["kind"] = IoK8sApiAppsV1StatefulSetList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiAppsV1StatefulSetList["apiVersion"] = "apps/v1";
static kind: IIoK8sApiAppsV1StatefulSetList["kind"] = "StatefulSetList";
}

Model.setSchema(IoK8sApiAppsV1StatefulSetList, "io.k8s.api.apps.v1.StatefulSetList", addSchema);

export {
  IIoK8sApiAppsV1StatefulSetList as IStatefulSetList,
  IoK8sApiAppsV1StatefulSetList as StatefulSetList
};
