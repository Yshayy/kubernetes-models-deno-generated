
import { IIoK8sApiCoordinationV1Lease } from "./IoK8sApiCoordinationV1Lease.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoordinationV1LeaseList.ts";

/**
 * LeaseList is a list of Lease objects.
 */
export interface IIoK8sApiCoordinationV1LeaseList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "coordination.k8s.io/v1";
/**
 * Items is a list of schema objects.
 */
"items": Array<IIoK8sApiCoordinationV1Lease>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "LeaseList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * LeaseList is a list of Lease objects.
 */
export class IoK8sApiCoordinationV1LeaseList extends Model<IIoK8sApiCoordinationV1LeaseList> implements IIoK8sApiCoordinationV1LeaseList {

apiVersion: IIoK8sApiCoordinationV1LeaseList["apiVersion"] = IoK8sApiCoordinationV1LeaseList["apiVersion"];

"items": Array<IIoK8sApiCoordinationV1Lease>;

kind: IIoK8sApiCoordinationV1LeaseList["kind"] = IoK8sApiCoordinationV1LeaseList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoordinationV1LeaseList["apiVersion"] = "coordination.k8s.io/v1";
static kind: IIoK8sApiCoordinationV1LeaseList["kind"] = "LeaseList";
}

Model.setSchema(IoK8sApiCoordinationV1LeaseList, "io.k8s.api.coordination.v1.LeaseList", addSchema);

export {
  IIoK8sApiCoordinationV1LeaseList as ILeaseList,
  IoK8sApiCoordinationV1LeaseList as LeaseList
};
