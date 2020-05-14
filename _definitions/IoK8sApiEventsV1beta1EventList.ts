
import { IIoK8sApiEventsV1beta1Event } from "./IoK8sApiEventsV1beta1Event.ts";

import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "./IoK8sApimachineryPkgApisMetaV1ListMeta.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiEventsV1beta1EventList.ts";

/**
 * EventList is a list of Event objects.
 */
export interface IIoK8sApiEventsV1beta1EventList {
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "events.k8s.io/v1beta1";
/**
 * Items is a list of schema objects.
 */
"items": Array<IIoK8sApiEventsV1beta1Event>;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "EventList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * EventList is a list of Event objects.
 */
export class IoK8sApiEventsV1beta1EventList extends Model<IIoK8sApiEventsV1beta1EventList> implements IIoK8sApiEventsV1beta1EventList {

apiVersion: IIoK8sApiEventsV1beta1EventList["apiVersion"] = IoK8sApiEventsV1beta1EventList["apiVersion"];

"items": Array<IIoK8sApiEventsV1beta1Event>;

kind: IIoK8sApiEventsV1beta1EventList["kind"] = IoK8sApiEventsV1beta1EventList["kind"];

"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IIoK8sApiEventsV1beta1EventList["apiVersion"] = "events.k8s.io/v1beta1";
static kind: IIoK8sApiEventsV1beta1EventList["kind"] = "EventList";
}

Model.setSchema(IoK8sApiEventsV1beta1EventList, "io.k8s.api.events.v1beta1.EventList", addSchema);

export {
  IIoK8sApiEventsV1beta1EventList as IEventList,
  IoK8sApiEventsV1beta1EventList as EventList
};
