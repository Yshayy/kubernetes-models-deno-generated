
import { IIoK8sApiCoreV1LimitRange } from "./IoK8sApiCoreV1LimitRange.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1LimitRangeList.ts";

/**
 * LimitRangeList is a list of LimitRange items.
 */
export interface IIoK8sApiCoreV1LimitRangeList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
 */
"items": Array<IIoK8sApiCoreV1LimitRange>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "LimitRangeList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * LimitRangeList is a list of LimitRange items.
 */
export class IoK8sApiCoreV1LimitRangeList extends Model<IIoK8sApiCoreV1LimitRangeList> implements IIoK8sApiCoreV1LimitRangeList {

apiVersion: IIoK8sApiCoreV1LimitRangeList["apiVersion"] = IoK8sApiCoreV1LimitRangeList["apiVersion"];

"items": Array<IIoK8sApiCoreV1LimitRange>;

kind: IIoK8sApiCoreV1LimitRangeList["kind"] = IoK8sApiCoreV1LimitRangeList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1LimitRangeList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1LimitRangeList["kind"] = "LimitRangeList";
}

Model.setSchema(IoK8sApiCoreV1LimitRangeList, "io.k8s.api.core.v1.LimitRangeList", addSchema);

export {
  IIoK8sApiCoreV1LimitRangeList as ILimitRangeList,
  IoK8sApiCoreV1LimitRangeList as LimitRangeList
};
