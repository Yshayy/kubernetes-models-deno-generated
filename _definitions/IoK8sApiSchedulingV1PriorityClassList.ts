
import { IIoK8sApiSchedulingV1PriorityClass } from "./IoK8sApiSchedulingV1PriorityClass.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiSchedulingV1PriorityClassList.ts";

/**
 * PriorityClassList is a collection of priority classes.
 */
export interface IIoK8sApiSchedulingV1PriorityClassList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "scheduling.k8s.io/v1";
/**
 * items is the list of PriorityClasses
 */
"items": Array<IIoK8sApiSchedulingV1PriorityClass>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "PriorityClassList";
/**
 * Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * PriorityClassList is a collection of priority classes.
 */
export class IoK8sApiSchedulingV1PriorityClassList extends Model<IIoK8sApiSchedulingV1PriorityClassList> implements IIoK8sApiSchedulingV1PriorityClassList {

apiVersion: IIoK8sApiSchedulingV1PriorityClassList["apiVersion"] = IoK8sApiSchedulingV1PriorityClassList["apiVersion"];

"items": Array<IIoK8sApiSchedulingV1PriorityClass>;

kind: IIoK8sApiSchedulingV1PriorityClassList["kind"] = IoK8sApiSchedulingV1PriorityClassList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiSchedulingV1PriorityClassList["apiVersion"] = "scheduling.k8s.io/v1";
static kind: IIoK8sApiSchedulingV1PriorityClassList["kind"] = "PriorityClassList";
}

Model.setSchema(IoK8sApiSchedulingV1PriorityClassList, "io.k8s.api.scheduling.v1.PriorityClassList", addSchema);

export {
  IIoK8sApiSchedulingV1PriorityClassList as IPriorityClassList,
  IoK8sApiSchedulingV1PriorityClassList as PriorityClassList
};
