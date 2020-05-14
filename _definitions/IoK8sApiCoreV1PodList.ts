
import { IIoK8sApiCoreV1Pod } from "./IoK8sApiCoreV1Pod.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1PodList.ts";

/**
 * PodList is a list of Pods.
 */
export interface IIoK8sApiCoreV1PodList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of pods. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
 */
"items": Array<IIoK8sApiCoreV1Pod>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PodList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PodList is a list of Pods.
 */
export class IoK8sApiCoreV1PodList extends Model<IIoK8sApiCoreV1PodList> implements IIoK8sApiCoreV1PodList {

apiVersion: IIoK8sApiCoreV1PodList["apiVersion"] = IoK8sApiCoreV1PodList["apiVersion"];

"items": Array<IIoK8sApiCoreV1Pod>;

kind: IIoK8sApiCoreV1PodList["kind"] = IoK8sApiCoreV1PodList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1PodList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1PodList["kind"] = "PodList";
}

Model.setSchema(IoK8sApiCoreV1PodList, "io.k8s.api.core.v1.PodList", addSchema);

export {
  IIoK8sApiCoreV1PodList as IPodList,
  IoK8sApiCoreV1PodList as PodList
};
