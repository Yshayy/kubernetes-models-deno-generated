
import { IIoK8sApiCoreV1Event } from "./IoK8sApiCoreV1Event.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1EventList.ts";

/**
 * EventList is a list of events.
 */
export interface IIoK8sApiCoreV1EventList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * List of events
 */
"items": Array<IIoK8sApiCoreV1Event>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "EventList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * EventList is a list of events.
 */
export class IoK8sApiCoreV1EventList extends Model<IIoK8sApiCoreV1EventList> implements IIoK8sApiCoreV1EventList {

apiVersion: IIoK8sApiCoreV1EventList["apiVersion"] = IoK8sApiCoreV1EventList["apiVersion"];

"items": Array<IIoK8sApiCoreV1Event>;

kind: IIoK8sApiCoreV1EventList["kind"] = IoK8sApiCoreV1EventList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiCoreV1EventList["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1EventList["kind"] = "EventList";
}

Model.setSchema(IoK8sApiCoreV1EventList, "io.k8s.api.core.v1.EventList", addSchema);

export {
  IIoK8sApiCoreV1EventList as IEventList,
  IoK8sApiCoreV1EventList as EventList
};
