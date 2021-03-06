
import { IIoK8sApimachineryPkgApisMetaV1MicroTime } from "./IoK8sApimachineryPkgApisMetaV1MicroTime.ts";

import { IIoK8sApimachineryPkgApisMetaV1Time } from "./IoK8sApimachineryPkgApisMetaV1Time.ts";

import { IIoK8sApiCoreV1ObjectReference } from "./IoK8sApiCoreV1ObjectReference.ts";

import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "./IoK8sApimachineryPkgApisMetaV1ObjectMeta.ts";

import { IIoK8sApiCoreV1EventSeries } from "./IoK8sApiCoreV1EventSeries.ts";

import { IIoK8sApiCoreV1EventSource } from "./IoK8sApiCoreV1EventSource.ts";

import { Model } from "../__include/base/src/index.ts";
import { addSchema } from "../_schemas/IoK8sApiCoreV1Event.ts";

/**
 * Event is a report of an event somewhere in the cluster.
 */
export interface IIoK8sApiCoreV1Event {
/**
 * What action was taken/failed regarding to the Regarding object.
 */
"action"?: string;
/**
 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "v1";
/**
 * The number of times this event has occurred.
 */
"count"?: number;
/**
 * Time when this Event was first observed.
 */
"eventTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
/**
 * The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
 */
"firstTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * The object that this event is about.
 */
"involvedObject": IIoK8sApiCoreV1ObjectReference;
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
 */
"kind": "Event";
/**
 * The time at which the most recent occurrence of this event was recorded.
 */
"lastTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * A human-readable description of the status of this operation.
 */
"message"?: string;
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata": IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
 */
"reason"?: string;
/**
 * Optional secondary object for more complex actions.
 */
"related"?: IIoK8sApiCoreV1ObjectReference;
/**
 * Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
 */
"reportingComponent"?: string;
/**
 * ID of the controller instance, e.g. `kubelet-xyzf`.
 */
"reportingInstance"?: string;
/**
 * Data about the Event series this event represents or nil if it's a singleton Event.
 */
"series"?: IIoK8sApiCoreV1EventSeries;
/**
 * The component reporting this event. Should be a short machine understandable string.
 */
"source"?: IIoK8sApiCoreV1EventSource;
/**
 * Type of this event (Normal, Warning), new types could be added in the future
 */
"type"?: string;
}

/**
 * Event is a report of an event somewhere in the cluster.
 */
export class IoK8sApiCoreV1Event extends Model<IIoK8sApiCoreV1Event> implements IIoK8sApiCoreV1Event {

"action"?: string;

apiVersion: IIoK8sApiCoreV1Event["apiVersion"] = IoK8sApiCoreV1Event["apiVersion"];

"count"?: number;

"eventTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;

"firstTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;

"involvedObject": IIoK8sApiCoreV1ObjectReference;

kind: IIoK8sApiCoreV1Event["kind"] = IoK8sApiCoreV1Event["kind"];

"lastTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;

"message"?: string;

"metadata": IIoK8sApimachineryPkgApisMetaV1ObjectMeta;

"reason"?: string;

"related"?: IIoK8sApiCoreV1ObjectReference;

"reportingComponent"?: string;

"reportingInstance"?: string;

"series"?: IIoK8sApiCoreV1EventSeries;

"source"?: IIoK8sApiCoreV1EventSource;

"type"?: string;

static apiVersion: IIoK8sApiCoreV1Event["apiVersion"] = "v1";
static kind: IIoK8sApiCoreV1Event["kind"] = "Event";
}

Model.setSchema(IoK8sApiCoreV1Event, "io.k8s.api.core.v1.Event", addSchema);

export {
  IIoK8sApiCoreV1Event as IEvent,
  IoK8sApiCoreV1Event as Event
};
