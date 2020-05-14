
import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { IIoK8sApiCoreV1EventSource } from "./IoK8sApiCoreV1EventSource.ts";

import { IIoK8sApimachineryPkgApisMetaV1MicroTime } from "./IoK8sApimachineryPkgApisMetaV1MicroTime.ts";

import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { IIoK8sApiEventsV1beta1EventSeries } from "./IoK8sApiEventsV1beta1EventSeries.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiEventsV1beta1Event.ts";

/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 */
export interface IIoK8sApiEventsV1beta1Event {
/**
 * What action was taken/failed regarding to the regarding object.
 */
"action"?: string;
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "events.k8s.io/v1beta1";
/**
 * Deprecated field assuring backward compatibility with core.v1 Event type
 */
"deprecatedCount"?: number;
/**
 * Deprecated field assuring backward compatibility with core.v1 Event type
 */
"deprecatedFirstTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Deprecated field assuring backward compatibility with core.v1 Event type
 */
"deprecatedLastTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Deprecated field assuring backward compatibility with core.v1 Event type
 */
"deprecatedSource"?: IIoK8sApiCoreV1EventSource;
/**
 * Required. Time when this Event was first observed.
 */
"eventTime": IIoK8sApimachineryPkgApisMetaV1MicroTime;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Event";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Optional. A human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
 */
"note"?: string;
/**
 * Why the action was taken.
 */
"reason"?: string;
/**
 * The object this Event is about. In most cases it's an Object reporting controller implements. E.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object.
 */
"regarding"?: IIoK8sApiCoreV1ObjectReference;
/**
 * Optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object.
 */
"related"?: IIoK8sApiCoreV1ObjectReference;
/**
 * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
 */
"reportingController"?: string;
/**
 * ID of the controller instance, e.g. `kubelet-xyzf`.
 */
"reportingInstance"?: string;
/**
 * Data about the Event series this event represents or nil if it's a singleton Event.
 */
"series"?: IIoK8sApiEventsV1beta1EventSeries;
/**
 * Type of this event (Normal, Warning), new types could be added in the future.
 */
"type"?: string;
}

/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 */
export class IoK8sApiEventsV1beta1Event extends Model<IIoK8sApiEventsV1beta1Event> implements IIoK8sApiEventsV1beta1Event {

"action"?: string;

apiVersion: IIoK8sApiEventsV1beta1Event["apiVersion"] = IoK8sApiEventsV1beta1Event["apiVersion"];

"deprecatedCount"?: number;

"deprecatedFirstTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;

"deprecatedLastTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;

"deprecatedSource"?: IIoK8sApiCoreV1EventSource;

"eventTime": IIoK8sApimachineryPkgApisMetaV1MicroTime;

kind: IIoK8sApiEventsV1beta1Event["kind"] = IoK8sApiEventsV1beta1Event["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"note"?: string;

"reason"?: string;

"regarding"?: IIoK8sApiCoreV1ObjectReference;

"related"?: IIoK8sApiCoreV1ObjectReference;

"reportingController"?: string;

"reportingInstance"?: string;

"series"?: IIoK8sApiEventsV1beta1EventSeries;

"type"?: string;

static apiVersion: IIoK8sApiEventsV1beta1Event["apiVersion"] = "events.k8s.io/v1beta1";
static kind: IIoK8sApiEventsV1beta1Event["kind"] = "Event";
}

Model.setSchema(IoK8sApiEventsV1beta1Event, "io.k8s.api.events.v1beta1.Event", addSchema);

export {
  IIoK8sApiEventsV1beta1Event as IEvent,
  IoK8sApiEventsV1beta1Event as Event
};
